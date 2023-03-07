/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@test/lib", "@test/api"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withTM(nextConfig);
