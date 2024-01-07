<script>
    export default {
        data() {
            return {
                appearPixel: window.innerHeight / 2,
                appear: false
            }
        },

        methods: {
            handleScroll() {
                this.appear = window.scrollY > this.appearPixel
            }
        },

        mounted() {
            window.addEventListener("scroll", this.handleScroll, true)
        }
    }
</script>

<template>
    <Transition name="pop">
        <a v-show="appear" href="#start">
            <span>Back to top</span>
            <img src="/src/assets/graphics/icons/arrow-top.png" alt="Arrow Icon to go back to top" width="40" /> </a
    ></Transition>
</template>

<style scoped lang="scss">
    .pop-enter-active {
        transform: scale(0);
    }
    .pop-enter-to {
        animation: appear 0.75s ease-in-out;
    }
    .pop-leave-to {
        animation: appear 0.75s ease-in-out reverse;
    }

    a {
        all: unset;
        background-color: $bulbasaur;

        padding: 0.5rem;
        border-radius: 99px;
        position: fixed;
        z-index: 2;

        right: 0.75rem;
        bottom: 0.75rem;

        display: flex;
        align-items: center;

        user-select: none;
        cursor: pointer;

        &:hover {
            background-color: $blueberry-weak;
            outline: 1pt solid $sugar;
        }

        img {
            width: 2rem;
            height: 2rem;
        }

        span {
            display: none;
        }
    }

    @media screen and (orientation: landscape) and (min-width: $laptop) {
        .pop-enter-to,
        .pop-leave-to {
            animation-duration: 0.25s;
        }

        a {
            right: 1.75rem;
            bottom: 1.75rem;

            img {
                width: 1.75rem;
                height: 1.75rem;
            }

            span {
                display: unset;
                color: $sugar;
                margin-inline: 0.5rem;
            }
        }
    }
</style>
