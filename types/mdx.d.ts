// types/mdx.d.ts
declare module "*.mdx, *.md" {
 let MDXComponent: (props) => JSX.Element;
 export default MDXComponent;
}
