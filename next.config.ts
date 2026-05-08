import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  basePath: isGitHubActions && repoName ? `/${repoName}` : "",
  assetPrefix: isGitHubActions && repoName ? `/${repoName}/` : "",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
