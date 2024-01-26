export default function extractMetaFromStringForBlog(content: string): any {
 // Adjust the regex to match the updated structure, including handling backticks for template strings
 const metaStringMatch = content.match(
  /export const metadata = (\{[\s\S]*?\}\s*);/
 );

 if (!metaStringMatch) return {};

 // Using a safer alternative to eval, such as Function constructor
 // This approach is a bit safer than eval but still use with caution
 const metaObject = new Function(`return (${metaStringMatch[1]});`)();

 return metaObject;
}
