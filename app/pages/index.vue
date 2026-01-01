<template>
  <main>
    <SectionsHero :hero="hero" />
    <SectionsBooking />
    <SectionsPartners :partners="partners" />
    <SectionsBenefits :advantages="advantages" />
    <SectionsOurServices :services="services" />
    <SectionsFlights :aircrcraft="aircrcraft" />
    <LazySectionsMap />
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
</script>

<style scoped>

</style>
