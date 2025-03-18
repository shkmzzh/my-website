/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let basePath = '';
let assetPrefix = '';

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath,
  },
};

export default nextConfig;
