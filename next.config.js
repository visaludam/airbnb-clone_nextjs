/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoidmlzYWx1IiwiYSI6ImNscHFrb2M1djAxZ2gyanFmaXA2MDVhNGMifQ.FEtwI1qpRhVLcmWr33Ku0g",
  },
};

module.exports = nextConfig;
