import type { NextConfig } from "next";

const legacyPages = [
  "access",
  "job-business",
  "job-electrical",
  "job-embedded",
  "kato",
  "media",
  "media-cubesat",
  "media-eps",
  "media-ground",
  "media-obc",
  "media-thermal",
  "news",
  "news-founded",
  "news-fusic",
  "news-spacelaunch",
  "news-spacebd",
  "oho",
  "recruit",
  "sano",
  "sato",
  "service",
  "team",
  "watanabe"
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true
      },
      ...legacyPages.map((page) => ({
        source: `/${page}.html`,
        destination: `/${page}`,
        permanent: true
      }))
    ];
  }
};

export default nextConfig;
