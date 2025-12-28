<template>
    <div class="how-we-work-cards-wrapper">
        <span class="h-w-line"><img src="/images/png/line.png" alt=""></span>
        <div class="how-we-work-card">
            <span>
                <svg height="28" width="28">

                    <use xlink:href="/sprite.svg#i-calendar" />

                </svg>
            </span>

            <h3>Parvozni bron qiling</h3>
            <p>Veb-sayt, telefon yoki messenjer orqali biz bilan bog'laning.</p>
        </div>

        <div class="how-we-work-card">
            <span>
                <svg height="28" width="28">

                    <use xlink:href="/sprite.svg#i-pilot" />

                </svg>
            </span>

            <h3>Parvozni bron qiling</h3>
            <p>Veb-sayt, telefon yoki messenjer orqali biz bilan bog'laning.</p>
        </div>

        <div class="how-we-work-card">
            <span>
                <svg height="28" width="28">

                    <use xlink:href="/sprite.svg#i-check" />

                </svg>
            </span>

            <h3>Parvozni bron qiling</h3>
            <p>Veb-sayt, telefon yoki messenjer orqali biz bilan bog'laning.</p>
        </div>

        <div class="how-we-work-card">
            <span>
                <svg height="28" width="28">

                    <use xlink:href="/sprite.svg#i-samalet" />

                </svg>
            </span>

            <h3>Parvozni bron qiling</h3>
            <p>Veb-sayt, telefon yoki messenjer orqali biz bilan bog'laning.</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.how-we-work-cards-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 40px;
    position: relative;

    @include respond(1177px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @include respond(550px) {
        grid-template-columns: repeat(1, 1fr);
    }

    .h-w-line {
        width: 72%;
        position: absolute;
        z-index: 0;
        left: 165px;
        @include respond(1177px) {
            display: none;
        }
    }

    .how-we-work-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        span {
            width: 60px;
            height: 60px;
            border: 1px solid;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0E1530;
        }

        h3 {
            font-weight: 500;
            font-size: 20px;
        }

        p {
            width: 100%;
            max-width: 317px;
            font-weight: 400;
            font-size: 16px;
            text-align: center;
            opacity: 0.7;
        }
    }
}
</style>