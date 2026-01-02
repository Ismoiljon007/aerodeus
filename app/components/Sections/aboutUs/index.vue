<template>
  <div class="about-us">
    <div class="container">
      <div class="about-us-wrapper">
        <AboutUsLeft
          :about="about"
          :statistics="statistics"
        />
        <AboutUsRight :about="about" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutUsLeft from './aboutUsLeft.vue';
import AboutUsRight from './aboutUsRight.vue';

defineProps<{ about?: any, statistics?: any }>();
</script>

<style scoped lang="scss">
    .about-us {
        padding: 80px 0;
        @media (max-width: 540px) {
          padding: 40px 0;
        }
        .about-us-wrapper {
            display: flex;
            align-items: center;
            gap: 16.5rem;
            @include respond(1200px) {
                flex-direction: column;
                gap: 50px;
            }
        }
    }
</style>
