/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "text/xml",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
