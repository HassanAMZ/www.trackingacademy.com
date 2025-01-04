export default function extractMetaFromString(content: string): any {
  // Regular expression to match the metadata pattern
  const metaStringMatch = content.match(
    /export const metadata = (\{[\s\S]*?\});/,
  );
  if (!metaStringMatch) return {};

  // Extract the metadata string
  const metaString = metaStringMatch[1];

  try {
    // Parse the metadata string into an object
    // Replace single quotes with double quotes for valid JSON
    // Add double quotes around object keys
    const metaJsonString = metaString
      .replace(/(\w+):/g, '"$1":') // Add quotes around keys
      .replace(/'/g, '"'); // Replace single quotes with double quotes

    const metaObject = JSON.parse(metaJsonString);
    return metaObject;
  } catch (error) {
    console.error("Error parsing metadata:", error);
    // Return an empty object or a default value if parsing fails
    return {};
  }
}
