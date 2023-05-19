/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  output: "export",
  assetPrefix: isProd ? "/chingy" : undefined,
  basePath: "/chingy",
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX(nextConfig);
