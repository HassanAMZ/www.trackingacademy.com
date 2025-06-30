// src/app/api/stripe/get-product/route.js
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    // Use provided productId or fallback to default
    const targetProductId = productId;

    console.log("Fetching product:", targetProductId);

    // Fetch both product and its price
    const product = await stripe.products.retrieve(targetProductId);
    const prices = await stripe.prices.list({
      product: targetProductId,
      active: true,
      limit: 1,
    });

    console.log("Product data:", {
      name: product.name,
      description: product.description,
      metadata: product.metadata,
      images: product.images,
    });

    if (!prices.data.length) {
      throw new Error("No active price found for this product");
    }

    const price = prices.data[0];

    // Enhanced feature extraction with multiple fallback strategies
    let features = [];

    // Strategy 1: Parse JSON from features metadata
    if (product.metadata?.features) {
      try {
        const parsed = JSON.parse(product.metadata.features);
        if (Array.isArray(parsed)) {
          features = parsed;
          console.log("Features found via JSON parsing:", features);
        }
      } catch (e) {
        console.warn("JSON parsing failed, trying comma-separated:", e.message);
        // Fallback to comma-separated
        features = product.metadata.features
          .split(",")
          .map((feature) => feature.trim())
          .filter(Boolean);
        console.log("Features found via comma-separated:", features);
      }
    }

    // Strategy 2: Try feature_list metadata
    if (features.length === 0 && product.metadata?.feature_list) {
      features = product.metadata.feature_list
        .split(",")
        .map((feature) => feature.trim())
        .filter(Boolean);
      console.log("Features found via feature_list:", features);
    }

    // Strategy 3: Check for individual feature keys in metadata
    if (features.length === 0) {
      const featureKeys = Object.keys(product.metadata || {})
        .filter((key) => key.startsWith("feature_"))
        .sort();

      if (featureKeys.length > 0) {
        features = featureKeys.map((key) => product.metadata[key]).filter(Boolean);
        console.log("Features found via individual keys:", features);
      }
    }

    // Strategy 4: Check for description parsing (if features are in description)
    if (features.length === 0 && product.description) {
      // Look for bullet points or numbered lists in description
      const descriptionFeatures = product.description
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.match(/^[•\-\*\d+\.]/))
        .map((line) => line.replace(/^[•\-\*\d+\.\s]+/, ""))
        .filter(Boolean);

      if (descriptionFeatures.length > 0) {
        features = descriptionFeatures;
        console.log("Features found in description:", features);
      }
    }

    // Build response object
    const response = {
      id: product.id,
      name: product.name,
      description: product.description || "Premium digital product with comprehensive features",
      priceId: price.id,
      unitAmount: price.unit_amount,
      currency: price.currency,
      features: features,
      // Include all available product data
      active: product.active,
      created: product.created,
      updated: product.updated,
      url: product.url,
      // Add images if available
      ...(product.images &&
        product.images.length > 0 && {
          images: product.images,
          image: product.images[0], // Keep backward compatibility
        }),
      // Include all metadata
      ...(product.metadata && {
        metadata: product.metadata,
        // Extract common metadata fields
        category: product.metadata.category,
        tags: product.metadata.tags ? product.metadata.tags.split(",").map((t) => t.trim()) : [],
        bundle_includes: product.metadata.bundle_includes,
        access_duration: product.metadata.access_duration,
        difficulty_level: product.metadata.difficulty_level,
      }),
      // Price details
      priceDetails: {
        id: price.id,
        currency: price.currency,
        unitAmount: price.unit_amount,
        unitAmountDecimal: price.unit_amount_decimal,
        recurring: price.recurring,
        type: price.type,
        billingScheme: price.billing_scheme,
      },
    };

    console.log("Final response features count:", features.length);

    return NextResponse.json(response);
  } catch (err) {
    console.error("Error fetching product:", err);

    // More detailed error response
    return NextResponse.json(
      {
        error: "Failed to fetch product information",
        details: err.message,
        productId: searchParams?.get("productId") || "default",
      },
      { status: 500 },
    );
  }
}

// Helper function to extract features from various formats
function extractFeaturesFromText(text) {
  if (!text) return [];

  // Try different patterns
  const patterns = [
    /[•\-\*]\s*(.+)/g, // Bullet points
    /\d+\.\s*(.+)/g, // Numbered lists
    /✓\s*(.+)/g, // Checkmarks
    /→\s*(.+)/g, // Arrows
  ];

  for (const pattern of patterns) {
    const matches = [...text.matchAll(pattern)];
    if (matches.length > 0) {
      return matches.map((match) => match[1].trim()).filter(Boolean);
    }
  }

  return [];
}
