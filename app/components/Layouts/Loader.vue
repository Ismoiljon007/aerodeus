<template>
  <Transition name="loader-fade">
    <div
      v-if="active"
      class="site-loader"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div class="site-loader__content">
        <span
          class="site-loader__ring"
          aria-hidden="true"
        />
        <span class="site-loader__text">{{ t('common.loading') }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ active: boolean }>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.site-loader {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4, 10, 36, 0.9);
  backdrop-filter: blur(8px);
}

.site-loader__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  color: $color-white;
}

.site-loader__ring {
  width: 5.6rem;
  height: 5.6rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: $color-yellow;
  border-radius: 50%;
  animation: loader-spin 0.9s linear infinite;
}

.site-loader__text {
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.25s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}

@keyframes loader-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
