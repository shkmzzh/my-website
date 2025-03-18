/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let basePath = '';
let assetPrefix = '';

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  // 从 "owner/repo" 中取出 repo 名称
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1] ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'sb';
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig = {
  output: 'export', // 开启静态导出功能
  basePath,
  assetPrefix,
  reactStrictMode: true,
  // 如果有需要，还可以配置 images.unoptimized 为 true
  images: {
    unoptimized: true
  },
  compress:true,
};

export default nextConfig;
