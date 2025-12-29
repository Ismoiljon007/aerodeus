<script setup lang="ts">
import HowWeWorkCards from './howWeWorkCards.vue';

</script>

<template>
    <div class="how-we-work">
        <div class="container">
            <div class="how-we-work-wrapper">
                <div class="how-we-wrok-text-wrapper">
                    <h2>Biz qanday ishlaymiz?</h2>
                    <span>Parvozingizga 4 qadam</span>
                </div>

                <HowWeWorkCards />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.how-we-work {
    padding: 20px 0;
}

.how-we-wrok-text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: 500;
        font-size: 42px;
    }

    span {
        font-weight: 400;
        font-size: 17px;
        opacity: 0.7;
    }

    @include respond(700px) {
        h2 {
            font-size: 30px;
        }
        span {
            font-size: 14px;
        }
    }
}
</style>