<template>
    <section id="about">
        <div class="grid">
            <div class="text">
                <h2>About me</h2>
                <p>
                    Name's Jesús. I'm a fullstack developer and UI designer from Argentina.<br /><br />
                    I've been working as a developer on the IT field since 2020 with web technologies, and recently I've started expanding the scope of my
                    expertise.<br /><br />
                    Apart from coding, I'm interested in topics like design and photography.
                </p>
            </div>
            <img src="/src/assets/graphics/picture.webp" alt="Picture of Jesus Lencina drinking Mate" width="50%" />
        </div>
        <div class="bottom-triangles" />
    </section>
</template>

<style scoped lang="scss">
    section {
        padding-top: 3vh;
        background-color: $blueberry;
        color: $sugar;
        position: relative;
    }

    .grid {
        all: unset;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-inline: 1.5rem;
    }

    h2 {
        color: $bulbasaur-intense;
        font-size: 3rem;
    }

    p {
        font-size: 1.15rem;
        line-height: 1.75;
    }

    img {
        padding-top: 2.25rem;
        width: 60vw;
        margin-left: 3rem;
    }

    .bottom-triangles {
        position: absolute;
        bottom: 0;
        z-index: 1;
        background-image: url("/src/assets/graphics/triangles-creamy.svg");
        width: 100%;
        height: 3rem;
    }

    @media screen and (orientation: landscape) and (min-width: $laptop) {
        section {
            padding-top: unset;
        }

        .grid {
            display: grid;
            align-items: center;
            grid-template-columns: 2.5fr 2fr;
            height: calc(100vh + 3rem);
            padding-top: unset;
            padding-inline: 6rem;
        }

        img {
            align-self: flex-end;
            justify-self: center;
            width: 80%;
        }

        h2 {
            font-size: 6rem;
        }

        p {
            font-size: 1.25rem;
        }
    }

    @media screen and (orientation: landscape) and (min-width: $large) {
        img {
            width: 75%;
        }
    }
</style>
