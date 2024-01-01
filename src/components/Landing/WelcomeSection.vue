<template>
    <main>
        <div class="cog"></div>
        <h1>Jesús Lencina</h1>
        <h3>Fullstack developer & UI specialist</h3>
        <div class="bottom-triangles" />
    </main>
</template>

<style scoped lang="scss">
    .cog {
        position: absolute;
        top: -24vh;
        left: -24vh;
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
        justify-content: flex-end;
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
        background-image: url("/src/assets/graphics/triangles.svg");
        width: 100%;
        height: 3rem;
    }

    @media screen and (min-width: $laptop) {
        .cog {
            top: -36vh;
            left: -36vh;
            width: 30rem;
            height: 30rem;
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
