<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<template>
    <Transition name="fall-down">
        <main v-if="show">
            <div class="center">
                <div class="cog" />

                <em>Loading...</em>
            </div>
        </main>
    </Transition>
</template>

<style lang="scss" scoped>
    .fall-down-enter-active {
        opacity: 0;
    }
    .fall-down-enter-to {
        animation: fall-down 0.75s ease-in-out;
    }
    .fall-down-leave-to {
        animation: fall-down 0.75s ease-in-out reverse;
    }

    main {
        transform-origin: bottom;
        pointer-event: none;
        background-color: $blueberry-weak;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 3;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .cog {
        background-image: url("/src/assets/graphics/cog-creamy.svg");
        background-size: cover;
        width: 18rem;
        height: 18rem;
        animation: rotate 4s linear infinite;
    }

    em {
        color: $creamy;
        font-size: 2rem;
    }
</style>
