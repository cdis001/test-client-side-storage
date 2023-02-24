/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@testCS/lib"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = withPlugins([...plugins], nextConfig);
module.exports = withTM(nextConfig);
