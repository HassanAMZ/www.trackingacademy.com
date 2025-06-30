import path from "path";
import getFiles from "@/utils/getFiles"; // Ensure this path is correct

export default async function getFolderData(
  contentDirectoryPath: string = "app/offers", // Default value assigned here
): Promise<{ id: string; slug: string; title: string }[]> {
  const baseDirectory = path.join(process.cwd(), contentDirectoryPath);
  const allPostsFiles = getFiles(baseDirectory);

  // Filter to include only `page.tsx` files that are one level deep
  const validFiles = allPostsFiles.filter((file) => {
    const relativePath = path.relative(baseDirectory, file);
    const parts = relativePath.split(path.sep);
    return parts.length === 2 && parts[1] === "page.tsx";
  });

  const contents = validFiles.map((filePath) => {
    const relativePath = path.relative(baseDirectory, filePath);
    const parts = relativePath.split(path.sep);
    const dirName = parts[0]; // Get the parent directory name (e.g., "offer-001")
    const title = dirName.replace(/-/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());
    let slug = relativePath.replace(path.sep, "/").replace(/\\/g, "/"); // Replace backslashes with forward slashes for URL consistency
    slug = slug.replace("/page.tsx", ""); // Remove the /page.tsx part from the slug
    return { id: filePath, slug, title };
  });

  return contents;
}
