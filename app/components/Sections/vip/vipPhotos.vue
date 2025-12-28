<template>
    <div class="business-photos-wrp">
        <div class="duble-img-b">
            <NuxtImg class="b-img" src="/images/png/busniess-s-img-1.png" alt="Our Service Main" format="webp"
                quality="80" loading="lazy" />
            <NuxtImg class="b-img" src="/images/png/busniess-s-img.png" alt="Our Service Detail 1" format="webp"
                quality="80" loading="lazy" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.business-photos-wrp {
    width: 100%;
    display: flex;
}

.duble-img-b {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 18px;
}

.b-img {
    width: 100%;
    height: 500px;

    @include respond(1520px) {
        height: 450px;
    }

    @include respond(1371px) {
        height: 400px;
    }

    @include respond(1250px) {
        height: 370px;
    }

    @include respond(625px) {
        height: 300px;
    }

    @include respond(510px) {
        height: 220px;
    }

    @include respond(415px) {
        height: 200px;
    }

    &:first-child {
        margin-top: 80px;

        @include respond(1200px) {
            margin-top: 0;
        }
    }
}
</style>