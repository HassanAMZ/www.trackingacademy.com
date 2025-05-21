// src/app/api/stripe/get-product/route.js
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the product details from Stripe
    // This is the product ID for your "3-Day See Every Sale Tracking System"
    const productId = "prod_SI6QXbIdeTQbUY"; // Replace with your actual product ID// Fetch both product and its price
    const product = await stripe.products.retrieve(productId);
    const prices = await stripe.prices.list({
      product: productId,
      active: true,
      limit: 1,
    });
    if (!prices.data.length) {
      throw new Error("No active price found for this product");
    }
    const price = prices.data[0]; // Extract features from product metadata if available
    let features = [];
    if (product.metadata && product.metadata.features) {
      try {
        features = JSON.parse(product.metadata.features);
      } catch (e) {
        console.warn("Could not parse features from metadata", e);
        // If JSON parsing fails, check if it's a comma-separated list
        features = product.metadata.features
          .split(",")
          .map((feature) => feature.trim());
      }
    } // If no features found in metadata, use any default ones you might have
    if (
      features.length === 0 &&
      product.metadata &&
      product.metadata.feature_list
    ) {
      features = product.metadata.feature_list
        .split(",")
        .map((feature) => feature.trim());
    } // If still no features, use hardcoded ones as a fallback
    if (features.length === 0) {
      features = [
        "Complete 'See Every Sale' Tracking System",
        "Looker Studio Ecommerce Dashboard Setup",
        "Google Analytics Ecommerce Tracking (95% Accuracy)",
        "Google Ads Conversion Tracking (95% Accuracy)",
        "GDPR & CCPA Cookie Consent Setup",
        "47-Point Ecom Conversion Checklist",
        "ROI & LTV Tracking Toolkit for Ecom Brands",
      ];
    }
    return NextResponse.json({
      id: product.id,
      name: product.name,
      description:
        product.description ||
        "Fix Facebook's Data Sharing Restrictions and Restore 95%+ Accurate Data for every key event",
      priceId: price.id,
      unitAmount: price.unit_amount,
      currency: price.currency,
      features: features,
      // Add additional metadata if you need it
      ...(product.images &&
        product.images.length > 0 && {
          image: product.images[0],
        }),
      ...(product.metadata && { metadata: product.metadata }),
    });
  } catch (err) {
    console.error("Error fetching product:", err);
    return NextResponse.json(
      { error: "Failed to fetch product information" },
      { status: 500 },
    );
  }
}
