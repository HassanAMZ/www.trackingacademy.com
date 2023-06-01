/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
 pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
 experimental: {
  appDir: true,
  mdxRs: true,
 },
 sassOptions: {
  includePaths: [path.join(__dirname, "styles")],
 },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
