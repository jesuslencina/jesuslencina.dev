<script setup>
    import ShortcutsList from "./ShortcutsList.vue"
</script>

<template>
    <main id="start">
        <div class="start cog-container">
            <div class="cog" />
        </div>
        <ShortcutsList :excludedItems="['home']" customClassname="welcome-screen" />
        <div class="end">
            <h1>Jesús Lencina</h1>
            <h3>Fullstack developer & UI specialist</h3>
            <div class="bottom-triangles" />
        </div>
    </main>
</template>

<style scoped lang="scss">
    .cog-container {
        justify-self: flex-start;
        position: relative;
        height: 20%;
    }
    .cog {
        position: absolute;
        top: -12.75rem;
        left: -12.75rem;
        background-image: url("/src/assets/graphics/cog.svg");
        background-size: cover;
        width: 25rem;
        height: 25rem;
        animation: rotate 9s linear infinite;
    }

    main {
        height: calc(100vh - 3rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h1 {
        font-size: 4rem;
        color: $blueberry;
        line-height: normal;
    }

    h3 {
        font-size: 1.5rem;
        margin-top: 0;
    }

    h1,
    h3 {
        margin-left: 1.5rem;
        margin-right: 3rem;
    }

    .bottom-triangles {
        background-image: url("/src/assets/graphics/triangles-blueberry.svg");
        width: 100%;
        height: 3rem;
    }

    @media screen and (min-width: $laptop) {
        .cog {
            top: -13.75rem;
            left: -13.75rem;
            width: 29rem;
            height: 29rem;
        }

        main {
            height: 100vh;
        }

        h1 {
            font-size: 6rem;
        }

        h3 {
            font-size: 2rem;
            margin-bottom: 3rem;
        }

        h1,
        h3 {
            margin-left: 3rem;
        }
    }
</style>
