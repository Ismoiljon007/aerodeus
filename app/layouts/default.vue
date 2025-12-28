<template>
  <LayoutsHeader />
  <NuxtPage />
  <LayoutsFooter />
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const requestUrl = useRequestURL();

const siteName = config.public.siteName || 'Aerodeus';
const siteDescription
  = config.public.siteDescription || 'Reliable freight and logistics services for businesses nationwide.';
const siteLang = config.public.siteLang || 'en';
const siteLocale = config.public.siteLocale || 'en_US';
const twitterHandle = config.public.twitterHandle || undefined;

const siteUrl = computed(() => {
  const raw = config.public.siteUrl || requestUrl.origin;
  return raw ? raw.replace(/\/$/, '') : '';
});

const canonicalUrl = computed(() => (siteUrl.value ? `${siteUrl.value}${route.path}` : route.path));

const siteImageUrl = computed<string | undefined>(() => {
  const image = config.public.siteImage;
  if (!image)
    return undefined;
  if (image.startsWith('http'))
    return image;
  return siteUrl.value ? `${siteUrl.value}${image}` : image;
});

const jsonLd = computed(() => {
  const baseUrl = siteUrl.value;
  const orgId = baseUrl ? `${baseUrl}#organization` : '#organization';
  const websiteId = baseUrl ? `${baseUrl}#website` : '#website';
  const pageId = canonicalUrl.value ? `${canonicalUrl.value}#webpage` : '#webpage';

  const organization: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': orgId,
    'name': siteName,
  };

  if (baseUrl)
    organization.url = baseUrl;
  if (siteImageUrl.value)
    organization.logo = siteImageUrl.value;

  const webSite: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    'name': siteName,
    'description': siteDescription,
    'inLanguage': siteLang,
    'publisher': { '@id': orgId },
  };

  if (baseUrl)
    webSite.url = baseUrl;

  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': pageId,
    'url': canonicalUrl.value,
    'name': siteName,
    'description': siteDescription,
    'isPartOf': { '@id': websiteId },
    'about': { '@id': orgId },
    'inLanguage': siteLang,
  };

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [organization, webSite, webPage],
  });
});

useHead({
  htmlAttrs: { lang: siteLang },
  titleTemplate: titleChunk =>
    titleChunk && titleChunk !== siteName ? `${titleChunk} | ${siteName}` : siteName,
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      children: jsonLd,
    },
  ],
});

useSeoMeta({
  title: siteName,
  description: siteDescription,
  ogTitle: siteName,
  ogDescription: siteDescription,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: siteImageUrl,
  ogSiteName: siteName,
  ogLocale: siteLocale,
  twitterCard: 'summary_large_image',
  twitterTitle: siteName,
  twitterDescription: siteDescription,
  twitterImage: siteImageUrl,
  twitterSite: twitterHandle,
});
</script>

<style scoped>

</style>
