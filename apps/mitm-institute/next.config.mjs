/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

// * this kind of way to do this (.mjx) is made for potential future use

const createConfig = async (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true, // * Recommended for the `pages` directory, default in `app`.
    poweredByHeader: false, // * Remove the `X-Powered-By` header.
    swcMinify: true,
    compiler: {
      styledComponents: true,
      removeConsole: process.env.NODE_ENV === 'production'
    },
    i18n: {
      locales: ['ru'],
      defaultLocale: 'ru',
      localeDetection: false
    },
    images: {
      // loader: 'cloudinary',
      // path: 'https://res.cloudinary.com/mitu-institute/',
      domains: ['res.cloudinary.com']
    },
    experimental: {
      // * Required:
      appDir: true,
      transpilePackages: ['ui']
    }
  }

  // * development only config
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return { ...nextConfig }
  }

  return nextConfig
}

export default createConfig
