/**
 * Normalizes a tag string by converting to lowercase and trimming whitespace
 * This ensures consistent tag handling regardless of case variations
 */
export const normalizeTag = (tag: string): string => {
  return tag.toLowerCase().trim();
};

/**
 * Normalizes an array of tags, removes duplicates caused by case differences,
 * and returns a clean array of unique, lowercase tags
 */
export const normalizeTags = (tags: string[]): string[] => {
  // Create a map to track unique lowercase tags
  const uniqueTagsMap = new Map<string, string>();

  // Process each tag
  tags.forEach((tag) => {
    const normalizedTag = normalizeTag(tag); // If the normalized tag isn't already in our map, add it
    // This prevents duplicates like "Shopify" and "shopify"
    if (!uniqueTagsMap.has(normalizedTag)) {
      uniqueTagsMap.set(normalizedTag, tag);
    }
  });

  // Return the unique normalized tags
  return Array.from(uniqueTagsMap.keys());
};

/**
 * For display purposes - capitalizes first letter of each word in a tag
 * e.g., "next.js development" becomes "Next.js Development"
 */
const formatTagForDisplay = (tag: string): string => {
  return tag
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Displays a tag in an appropriate format while maintaining special casing
 * for known technical terms (e.g., JavaScript, TypeScript, Next.js)
 */
export const displayTag = (tag: string): string => {
  // Special case dictionary for common technical terms
  const specialCaseTags: Record<string, string> = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    react: "React",
    "next.js": "Next.js",
    "node.js": "Node.js",
    css: "CSS",
    html: "HTML",
    api: "API",
    ui: "UI",
    ux: "UX",
    aws: "AWS",
    seo: "SEO",
    graphql: "GraphQL",
    shopify: "Shopify",
    wordpress: "WordPress",
    woocommerce: "WooCommerce",
    php: "PHP",
    ios: "iOS",
    // Add more as needed
  };

  const normalizedTag = normalizeTag(tag);

  // Return special casing if it exists
  if (normalizedTag in specialCaseTags) {
    return specialCaseTags[normalizedTag];
  }

  // Otherwise, use standard capitalization
  return formatTagForDisplay(normalizedTag);
};
