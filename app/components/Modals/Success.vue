<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-overlay">
        <div class="booking-modal">
          <div class="modal-success__icon">
            <IconsSuccess />
          </div>
          <h1 class="modal-success__title">Muvaffaqiyatli yuborildi!</h1>
          <p class="modal-success__subtitle">
            Bizning menedjerlar tez orqada siz bilan aloqaga chiqishadi. Rahmat
          </p>
          <div class="modal-success__btn">
            <UiButton> Tushunarli </UiButton>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000b2;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  padding: 30px;
}

.booking-modal {
  position: relative;
  background: #1d243d;
  border-radius: 12px;
  width: 100%;
  max-width: 472px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  border: 1px solid #ffffff1a;

  @media (max-width: 640px) {
    padding: 24px;
    max-height: 95vh;
  }
}

.modal-success {
  &__icon {
    display: grid;
    place-items: center;
  }

  &__title {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    margin-top: 40px;
  }
  &__subtitle{
    margin-top: 16px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
  }
  &__btn{
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
      width: 100%;
    }
  }
}
</style>
