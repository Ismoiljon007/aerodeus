<template>
  <NuxtLayout />
</template>

<script setup lang="ts">
import { defineOrganization, defineWebPage, defineWebSite, useSchemaOrg } from '@unhead/schema-org/vue';

const { locale, t } = useI18n();
const siteUrl = 'https://aerodeus.uz';

// Get SEO data from translations
const seoTitle = computed(() => t('seo.title'));
const seoDescription = computed(() => t('seo.description'));
const seoKeywords = computed(() => t('seo.keywords'));

// SEO Head
useHead({
  titleTemplate: title => title ? `${title} | Aerodeus` : seoTitle.value,
  htmlAttrs: {
    lang: () => locale.value,
  },
});

// SEO Meta
useSeoMeta({
  title: () => seoTitle.value,
  description: () => seoDescription.value,
  keywords: () => seoKeywords.value,
  ogTitle: () => seoTitle.value,
  ogDescription: () => seoDescription.value,
  ogImage: `${siteUrl}/og-image.jpg`,
  ogUrl: siteUrl,
  ogType: 'website',
  ogSiteName: 'Aerodeus',
  ogLocale: () => locale.value === 'uz' ? 'uz_UZ' : locale.value === 'ru' ? 'ru_RU' : 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: () => seoTitle.value,
  twitterDescription: () => seoDescription.value,
  twitterImage: `${siteUrl}/og-image.jpg`,
  robots: 'index, follow',
});

// Schema.org - Organization, WebSite, WebPage, and Service
useSchemaOrg([
  defineOrganization({
    name: 'Aerodeus',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Premium private charter flight booking platform',
    email: 'info@aerodeus.uz',
    telephone: '+998712000000',
    address: {
      '@type': 'PostalAddress',
      'streetAddress': 'Tashkent',
      'addressLocality': 'Tashkent',
      'addressCountry': 'UZ',
    },
    sameAs: [
      'https://facebook.com/aerodeus',
      'https://instagram.com/aerodeus',
      'https://t.me/aerodeus',
    ],
  }),
  defineWebSite({
    name: 'Aerodeus',
    url: siteUrl,
    description: () => seoDescription.value,
    inLanguage: ['en', 'ru', 'uz'],
  }),
  defineWebPage({
    name: () => seoTitle.value,
    description: () => seoDescription.value,
  }),
  // Service Schema for Charter Flights
  {
    '@type': 'Service',
    'name': 'Private Charter Flights',
    'description': 'Premium private jet charter services for business and leisure travel',
    'provider': {
      '@type': 'Organization',
      'name': 'Aerodeus',
    },
    'serviceType': 'Air Charter Service',
    'areaServed': {
      '@type': 'Country',
      'name': 'Uzbekistan',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Charter Flight Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Business Jet Charter',
            'description': 'Executive jet charter for corporate travel',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'VIP Charter Flights',
            'description': 'Luxury VIP charter flights with premium amenities',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Group Charter',
            'description': 'Charter flights for groups and special events',
          },
        },
      ],
    },
  },
  // LocalBusiness Schema
  {
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    'name': 'Aerodeus',
    'image': `${siteUrl}/logo.png`,
    'telephone': '+998712000000',
    'email': 'info@aerodeus.uz',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Tashkent',
      'addressLocality': 'Tashkent',
      'addressCountry': 'UZ',
      'postalCode': '100000',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 41.2995,
      'longitude': 69.2401,
    },
    'url': siteUrl,
    'priceRange': '$$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
  },
]);
</script>
