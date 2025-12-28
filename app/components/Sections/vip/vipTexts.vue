<template>
    <div class="our-service-txt">
        <div class="our-services-texts">
            <div class="our-services-texts-top">
                <h2>Business & Corporate Aviation</h2>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's when an unknown printer took a galley of type and scrambled it to make
                </p>

                <UiButton>Band qilish</UiButton>
            </div>

            <div class="our-services-texts-bottom">
                <div class="our-services-bottom-item">
                    <svg height="25" width="25">

                        <use xlink:href="/sprite.svg#i-check" />

                    </svg>
                    <span>Certified according to Part 135</span>
                </div>

                <div class="our-services-bottom-item">
                    <svg height="25" width="25">

                        <use xlink:href="/sprite.svg#i-check" />

                    </svg>
                    <span>Certified according to Part 135</span>
                </div>

                <div class="our-services-bottom-item">
                    <svg height="25" width="25">

                        <use xlink:href="/sprite.svg#i-check" />

                    </svg>
                    <span>Certified according to Part 135</span>
                </div>

                <div class="our-services-bottom-item">
                    <svg height="25" width="25">

                        <use xlink:href="/sprite.svg#i-check" />

                    </svg>
                    <span>Certified according to Part 135</span>
                </div>

                <div class="our-services-bottom-item">
                    <svg height="25" width="25">

                        <use xlink:href="/sprite.svg#i-check" />

                    </svg>
                    <span>Certified according to Part 135</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.our-service-txt {
    @include respond(490px) {
        padding-bottom: 20px;
    }
}

.our-services-texts {
    display: flex;
    flex-direction: column;
    gap: 90px;
    position: relative;

    @include respond(1300px) {
        gap: 50px;
    }

    @include respond(1200px) {
        align-items: center;
    }

    .our-services-texts-top {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        @include respond(1200px) {
            align-items: center;
        }

        @include respond(490px) {
            button {
                width: 100%;
                position: absolute;
                bottom: -80px;
            }
        }

        h2 {
            font-weight: 500;
            font-size: 32px;
            text-align: center;
        }

        p {
            width: 100%;
            max-width: 543px;
            opacity: 0.7;
        }

        @include respond(1150px) {
            align-items: center;

            p {
                max-width: 100%;
                text-align: center;
            }
        }
    }

    .our-services-texts-bottom {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .our-services-bottom-item {
            display: flex;
            align-items: center;
            gap: 13px;
            opacity: 0.7;
        }
    }
}
</style>