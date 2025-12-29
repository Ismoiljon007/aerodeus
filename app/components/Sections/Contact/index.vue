<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-section__content">
        <div class="contact-section__header">
          <h2 class="contact-section__title">
            Biz bilan aloqa
          </h2>
          <p class="contact-section__subtitle">
            Ma'lumotlarni qoldiring va biz imkon qadar tezroq siz bilan bog'lanamiz
          </p>
        </div>

        <form
          class="contact-form"
          @submit.prevent="handleSubmit"
        >
          <div class="contact-form__fields">
            <div class="contact-form__field">
              <label
                class="contact-form__label"
                for="name"
              >Ism</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                class="contact-form__input"
                placeholder="Yozilsin..."
                required
              >
            </div>

            <div class="contact-form__field">
              <label
                class="contact-form__label"
                for="phone"
              >Telefon raqam</label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="contact-form__input"
                placeholder="Yozilsin..."
                required
              >
            </div>

            <div class="contact-form__field contact-form__field--full">
              <label
                class="contact-form__label"
                for="email"
              >
                Qayga izoh (majburiy emas)
              </label>
              <input
                id="email"
                v-model="formData.message"
                type="text"
                class="contact-form__input"
                placeholder="Yozilsin..."
              >
            </div>
          </div>

          <button
            type="submit"
            class="contact-form__submit"
          >
            Yuborish
          </button>
        </form>

        <div class="contact-info">
          <div class="contact-info__item">
            <div class="contact-info__icon contact-info__icon--location">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="contact-info__content">
              <p class="contact-info__label">
                Manzil
              </p>
              <p class="contact-info__value">
                Tashkent, Uzbekistan TSUM,<br>
                Chimkentskaya 1, office of Jets One Ai
              </p>
            </div>
          </div>

          <div class="contact-info__item">
            <div class="contact-info__icon contact-info__icon--phone">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="contact-info__content">
              <p class="contact-info__label">
                Bizning kontaktlar
              </p>
              <p class="contact-info__value">
                +998 33 850 22 22
              </p>
            </div>
          </div>

          <div class="contact-info__item">
            <div class="contact-info__icon contact-info__icon--email">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="contact-info__content">
              <p class="contact-info__label">
                Elektron pochta
              </p>
              <p class="contact-info__value">
                info@jetsoneair.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FormData {
  name: string
  phone: string
  message: string
}

const formData = ref<FormData>({
  name: '',
  phone: '',
  message: '',
});

function handleSubmit() {
  console.log('Form submitted:', formData.value);
}
</script>

<style lang="scss" scoped>
</style>
