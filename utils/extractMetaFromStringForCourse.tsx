export default function extractMetaFromStringForCourse(content: string): any {
 // Extract the meta string from the content
 const metaStringMatch = content.match(
  /export const metadata = (\{[\s\S]*?\});/
 );
 if (!metaStringMatch) return {};

 // Evaluate the string to get the object
 // This is a bit hacky, but given the context, it should be safe
 const metaObject = eval(`(${metaStringMatch[1]})`);
 return metaObject;
}
