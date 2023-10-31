/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
 pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
 experimental: {
  mdxRs: true,
  optimizeServerReact: true,
 },
 reactStrictMode: true,
 sassOptions: {
  includePaths: [path.join(__dirname, "styles")],
 },
};

const withMDX = require("@next/mdx")({
 extension: /\.mdx?$/,
 options: {
  remarkPlugins: [],
  rehypePlugins: [],
 },
});
module.exports = withMDX(nextConfig);
