import type { NextConfig } from "next";

const [owner = "", repository = ""] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const basePath = repository && repository !== `${owner}.github.io` ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
