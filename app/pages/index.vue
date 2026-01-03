<template>
  <main>
    <SectionsHero :hero="hero" />
    <SectionsBooking />
    <SectionsPartners :partners="partners" />
    <SectionsBenefits :advantages="advantages" />
    <SectionsOurServices :services="services" />
    <SectionsFlights :aircrcraft="aircrcraft" />
    <LazySectionsMap
      :section="geographySection"
      :routes="geographyRoutes"
    />
    <SectionsHowWeWork
      :how-we-work="howWeWork"
      :how-we-work-steps="howWeWorkSteps"
    />
    <SectionsAboutUs
      :about="about"
      :statistics="statistics"
    />
    <SectionsContact />
  </main>
</template>

<script setup lang="ts">
interface City {
  id: number
  name: string
  country_name: string
  country_code: string | null
  flag: string | null
  image: string | null
  latitude: number
  longitude: number
  airport_code?: string | null
  size?: number
  population?: number
  importance?: number
}

interface RouteRow {
  id: number
  from_city: City
  to_city: City
}

interface RoutesResponse {
  status: boolean
  message: string
  data: RouteRow[]
}

interface GeographySection {
  id: number
  title: string
  subtitle: string
  map_image: string | null
}

interface GeographySectionResponse {
  status: boolean
  message: string
  data: GeographySection
}

const { locale } = useI18n();

const { data: hero } = await useAsyncData(() => `hero-${locale.value}`, () => apiFetch('/hero/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: partners } = await useAsyncData(() => `partners-${locale.value}`, () => apiFetch('/partners/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: advantages } = await useAsyncData(() => `advantages-${locale.value}`, () => apiFetch('/advantages/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: services } = await useAsyncData(() => `services-${locale.value}`, () => apiFetch('/services/with-features/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: aircrcraft } = await useAsyncData(() => `aircrcraft-${locale.value}`, () => apiFetch('/aircraft/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: howWeWork } = await useAsyncData(() => `howWeWork-${locale.value}`, () => apiFetch('/how-we-work/section/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: howWeWorkSteps } = await useAsyncData(() => `howWeWorkSteps-${locale.value}`, () => apiFetch('/how-we-work/steps/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: statistics } = await useAsyncData(() => `statistics-${locale.value}`, () => apiFetch('/statistics/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: about } = await useAsyncData(() => `about-${locale.value}`, () => apiFetch('/about/', { params: { lang: locale.value } }), { watch: [locale] });
const { data: geographySectionData } = await useAsyncData<GeographySectionResponse>(
  () => `geography-section-${locale.value}`,
  () => apiFetch('/geography/section/', { params: { lang: locale.value } }),
  { watch: [locale] },
);
const { data: geographyRoutesData } = await useAsyncData<RoutesResponse>(
  () => `geography-routes-${locale.value}`,
  () => apiFetch('/geography/routes/', { params: { lang: locale.value } }),
  { watch: [locale] },
);

const geographySection = computed(() => geographySectionData.value?.data ?? null);
const geographyRoutes = computed(() => geographyRoutesData.value?.data ?? []);
</script>

<style scoped>

</style>
