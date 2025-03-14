/** @type {import('next').NextConfig} */
let assetPrefix = ''
let basePath = '/'

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS)

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}`
  basePath = `/${repo}`
}

const nextConfig = {
  assetPrefix,
  basePath,
  reactStrictMode: true,
  images: {
    unoptimized: isGithubActions, // 仅在 GitHub Actions 下关闭图片优化
  },
}

export default nextConfig
