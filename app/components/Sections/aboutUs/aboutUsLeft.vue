<template>
    <div class="about-us-left">
        <div class="about-us-left-img-and-cards">
            <img class="about-us-main-img" src="/images/png/about-us-img.png" alt="">
            <div class="about-us-cards-wrapper">
                <span class="about-us-line-dec"><img src="/images/png/about-us-line.png" alt=""></span>
                <span class="samalet-line"><img src="/images/png/line-samalet.png" alt=""></span>
                <UiCard v-for="item in 4" class="about-us-card">
                    <h3>+3218</h3>
                    <span>Mamnun mijozlar</span>
                </UiCard>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.about-us-left-img-and-cards {
    display: flex;
    align-items: center;
    gap: 20px;

    @include respond(885px) {
        flex-direction: column;
    }

    .about-us-main-img {
        width: 500px;
        height: 460px;
    }
}

.about-us-cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @include respond(885px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .about-us-line-dec {
        height: 100%;
        position: absolute;
        right: -45px;
        top: 19px;

        @include respond(885px) {
            display: none;
        }
    }

    .samalet-line {
        position: absolute;
        right: -63px;
        top: 209px;

        @include respond(885px) {
            display: none;
        }
    }

    .about-us-card {
        width: fit-content;
        padding: 20px 40px;

        h3 {
            font-weight: 400;
            font-size: 26px;
        }

        span {
            width: 100px;
            display: block;
            font-size: 14px;
            opacity: 0.7;
        }
    }
}
</style>