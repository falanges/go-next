/** @type {import('next').NextConfig} */
const NODE_ENV = process.env.NODE_ENV;

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // We upload source maps for production.
    if (NODE_ENV === "production") {
      // `config.devtool` must be 'hidden-source-map' or 'source-map' to properly pass sourcemaps.
      // https://github.com/vercel/next.js/blob/89ec21ed686dd79a5770b5c669abaff8f55d8fef/packages/next/build/webpack/config/blocks/base.ts#L40
      config.devtool = "hidden-source-map";
    }

    return config;
  },
};

export default nextConfig;
