/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Old WordPress slugs → clean slugs (301s preserve link equity)
      { source: '/capabilities/mass-2', destination: '/capabilities/mass', permanent: true },
      { source: '/capabilities/dimensional-2', destination: '/capabilities/dimensional', permanent: true },
      // Old blog posts with theme-demo slugs → most relevant pages
      { source: '/2016/11/flow-calibration', destination: '/capabilities/flow', permanent: true },
      { source: '/2026/02/flow-calibration-2', destination: '/capabilities/force-torque', permanent: true },
      { source: '/2016/05/a-sound-idea-solar-panels-as-sonic-barriers-7', destination: '/capabilities/pipettes', permanent: true },
      { source: '/2016/04/a-sound-idea-solar-panels-as-sonic-barriers-10', destination: '/services', permanent: true },
      { source: '/2016/03/a-sound-idea-solar-panels-as-sonic-barriers-8', destination: '/services', permanent: true },
      { source: '/blog', destination: '/faq', permanent: false },
    ];
  },
};

export default nextConfig;
