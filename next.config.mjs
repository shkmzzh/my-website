/** @type {import('next').NextConfig} */

let assetPrefix = ``
let basePath = ``
const isGithubActions = process.env.GITHUB_ACTIONS || false;
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: 'export',
  assetPrefix,
  basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
