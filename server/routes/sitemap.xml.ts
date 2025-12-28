import { defineEventHandler, getRequestURL, setHeader } from 'h3'

// Add more routes here when new pages are added.
const staticRoutes = ['/']

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const baseUrl = (config.public.siteUrl || getRequestURL(event).origin).replace(/\/$/, '')
  const now = new Date().toISOString()

  const urls = staticRoutes
    .map((path) => {
      const loc = `${baseUrl}${path}`
      return `<url><loc>${loc}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`
    })
    .join('')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
