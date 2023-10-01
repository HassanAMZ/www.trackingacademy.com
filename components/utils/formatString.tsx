export default function formatString(inputStr: String) {
 let formattedStr = inputStr.toLowerCase();
 formattedStr = formattedStr.replace(/\s+/g, "-");
 formattedStr = formattedStr.replace(/-$/, "");
 return formattedStr;
}
