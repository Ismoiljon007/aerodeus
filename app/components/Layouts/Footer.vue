<template>
  <header class="site-footer">
    <div class="container">
      <NuxtLink
        class="site-logo"
        to="/"
      >
        <!-- <svg
          height="80"
          width="133"
        >
          <use xlink:href="/sprite.svg#i-logo" />
        </svg> -->
        <img
          :src="settings?.data?.logo"
          alt=""
        >
      </NuxtLink>
      <div class="site-footer_center">
        <nav class="sitenav">
          <ul>
            <li>
              <NuxtLink :to="localePath('/#services')">
                {{ $t('navbar.services') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/#advantages')">
                {{ $t('navbar.advantages') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/#fleet')">
                {{ $t('navbar.fleet') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/#how-we-work')">
                {{ $t('navbar.howWeWork') }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <small>{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</small>
      </div>
      <div class="site-footer_social">
        <a
          v-if="settings?.data?.telegram"
          :href="settings?.data?.telegram"
        >
          <svg
            height="25"
            width="25"
          >
            <use xlink:href="/sprite.svg#i-telegram" />
          </svg>
        </a>
        <a
          v-if="settings?.data?.instagram"
          :href="settings?.data?.instagram"
        >
          <svg
            height="25"
            width="25"
          >
            <use xlink:href="/sprite.svg#i-instagram" />
          </svg>
        </a>
        <a
          v-if="settings?.data?.facebook"
          :href="settings?.data?.facebook"
        >
          <svg
            height="25"
            width="25"
          >
            <use xlink:href="/sprite.svg#i-facebook" />
          </svg>
        </a>
        <a
          v-if="settings?.data?.youtube"
          :href="settings?.data?.youtube"
        >
          <svg
            height="25"
            width="25"
          >
            <use xlink:href="/sprite.svg#i-youtube" />
          </svg>
        </a>
        <a
          v-if="settings?.data?.linkedin"
          :href="settings?.data?.linkedin"
        >
          <svg
            height="25"
            width="25"
          >
            <use xlink:href="/sprite.svg#i-linkedin" />
          </svg>
        </a>
        <a
          v-if="settings?.data?.twitter"
          :href="settings?.data?.twitter"
        >
          <svg
            height="25"
            width="25"
          >
            <use xlink:href="/sprite.svg#i-twitter" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const { data: settings } = await useAsyncData(
  'settings',
  async () => apiFetch('/settings/', { params: { lang: locale.value } }),
  { watch: [locale] },
);
</script>

<style scoped lang="scss">
.site-footer {
  padding: 3rem 0;
  background: rgba($color: $color-white, $alpha: 0.04);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    @include respond(980px) {
      flex-direction: column;
      gap: 3rem;
    }
  }

  &_center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.3rem;
    @include respond(980px) {
      order: 3;
    }
  }
  .site-logo {
    display: flex;
     @include respond(980px) {
      order: 1;
    }
    svg {
      width: 14rem;
      height: 8rem;
    }
  }
  .sitenav {
     @include respond(980px) {
      display: none;
    }
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 6rem;
      a {
        text-decoration: none;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -0.5rem;
            width: 100%;
            height: 2px;
            background: $color-white;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
      }
    }
  }
  small {
    font-size: 14px;
    color: rgba($color: $color-white, $alpha: 0.5);
    text-align: center;
  }
  .site-footer_social {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    @include respond(980px) {
      order: 2;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background: rgba($color: $color-white, $alpha: 0.1);
    }
  }

}
</style>
