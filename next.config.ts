import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
console.log("isGithubPages", isGithubPages);
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const repoName = "laboratory-mui"; // replace this with your repo name

const nextConfig: NextConfig = {
  webpack(config) {
    // Exclude SVG from Next.js's default file loader
    const fileLoaderRule = config.module.rules.find(
      (rule: { test?: { test?: (path: string) => boolean } }) =>
        rule.test?.test?.(".svg")
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add custom rule for handling SVGs with SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });

    return config;
  },
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only enable CSS optimization in production
  // experimental:
  //   process.env.NODE_ENV === "production"
  //     ? {
  //         optimizeCss: true,
  //       }
  //     : {},
};

export default nextConfig;
