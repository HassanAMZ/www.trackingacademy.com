import { PostMetadata } from "@/types/index";

declare module "*.mdx, *.md" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
  export const metadata: PostMetadata;
}
