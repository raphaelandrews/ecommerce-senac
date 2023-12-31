/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["misc.scdn.co", "i.scdn.co", "geo-media.beatsource.com", "i1.sndcdn.com", "media.pitchfork.com", "seed-mix-image.spotifycdn.com", "sloqfsbrjqsnhjgkbpug.supabase.co"]
  }
}

module.exports = nextConfig
