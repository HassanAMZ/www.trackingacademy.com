const { withNextVideo } = require("next-video/process");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["geist"],
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],

  experimental: {
    swcMinify: true,
    mdxRs: true,
    optimizeServerReact: true,
    webpackBuildWorker: true,
    // Add these optimizations
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
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
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withNextVideo(withMDX(nextConfig));
