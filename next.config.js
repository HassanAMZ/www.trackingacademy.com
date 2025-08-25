const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["geist"],
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
  swcMinify: true,

  experimental: {
    mdxRs: true,
    optimizeServerReact: true,
    webpackBuildWorker: true,

    // Add these optimizations
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },

  compress: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "quinnportfolio.com",
      },
      {
        protocol: "https",
        hostname: "www.upwork.com",
      },
      {
        protocol: "https",
        hostname: "*.ytimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.vercel-storage.com",
        pathname: "**",
      },
    ],
  },

  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
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
