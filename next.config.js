/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "scontent.fdad3-5.fna.fbcdn.net"],
  },
};

module.exports = nextConfig;

// const path = require("path");

// module.exports = {
//   webpack: (config) => {
//     config.resolve.alias["@components"] = path.join(__dirname, "components");
//     return config;
//   },
// };
