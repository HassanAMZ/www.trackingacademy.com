import fs from "fs";
import path from "path";
import AuthPre from "./AuthPre";

interface DataLayerCodeBlockProps {
  fileName: string;
}

export default function DataLayerCodeBlock({
  fileName,
}: DataLayerCodeBlockProps) {
  const filePath = path.join(process.cwd(), `/data/datalayer-code/${fileName}`);
  let codeContent = "File not found.";

  try {
    codeContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading file:", error);
  }

  return <AuthPre language="JavaScript">{codeContent}</AuthPre>;
}
