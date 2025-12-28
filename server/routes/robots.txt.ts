import { defineEventHandler, getRequestURL, setHeader } from 'h3'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const baseUrl = (config.public.siteUrl || getRequestURL(event).origin).replace(/\/$/, '')

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return `User-Agent: *\nDisallow:\nSitemap: ${baseUrl}/sitemap.xml\n`
})
