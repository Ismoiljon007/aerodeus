<script setup lang="ts">
import FlightsPhotos from './flightsPhotos.vue';
import Flightstexts from './flightstexts.vue';


</script>

<template>
    <div class="our-services">
        <div class="container">
            <div class="our-services-wrapper">
                <h2 class="our-services-wrapper__title">Bizning xizmatlarimiz</h2>
                <p class="our-services-wrapper__sub-title">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                </p>

                <div class="images-and-texts-wrp">
                    <FlightsPhotos/>
                    <Flightstexts/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.our-services {
    padding-bottom: 40px;
    .our-services-wrapper {
        @include respond(1200px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
        }

        &__title {
            font-weight: 500;
            font-size: 42px;

            @include respond(750px) {
                font-size: 35px;
            }
        }

        &__sub-title {
            font-weight: 400;
            font-size: 18px;
            opacity: 0.7;

            @include respond(1200px) {
                text-align: center;
            }

            @include respond(750px) {
                font-size: 16px;
            }
        }

        .images-and-texts-wrp {
            display: flex;
            align-items: flex-start;
            gap: 90px;
            padding: 50px 0;

            @include respond(1270px) {
                gap: 50px;
                align-items: center;
            }

            @include respond(1270px) {
                padding: 20px;
            }

            @include respond(1200px) {
                flex-direction: column;
            }
        }
    }
}
</style>