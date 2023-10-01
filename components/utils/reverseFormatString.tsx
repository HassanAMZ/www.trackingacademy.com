export default function reverseFormatString(formattedStr: string): string {
 let originalStr = formattedStr.replace(/-/g, " "); // Replacing dashes with spaces
 originalStr = originalStr.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalizing first letter of each word
 return originalStr;
}
