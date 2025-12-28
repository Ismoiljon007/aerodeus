<script setup lang="ts">
import VipPhotos from './vipPhotos.vue';
import VipTexts from './vipTexts.vue';
</script>

<template>
    <div class="our-services">
        <div class="container">
            <div class="our-services-wrapper">

                <div class="images-and-texts-wrp">
                    <VipPhotos class="media-component" />
                    <VipTexts />
                    <VipPhotos class="desctop-component" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.media-component {
    display: none;

    @include respond(1200px) {
        display: flex;
    }
}

.desctop-component {
    display: flex;

    @include respond(1200px) {
        display: none;
    }
}

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
            width: 100%;

            @include respond(1590px) {
                gap: 30px;
            }

            &>* {
                flex: 1;
                width: 100%;
            }

            @include respond(1270px) {
                gap: 50px;
                padding: 20px;
            }

            @include respond(1200px) {
                flex-direction: column;
                align-items: center;

                &>* {
                    flex: none;
                }
            }
        }
    }
}
</style>