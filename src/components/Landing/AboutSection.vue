<template>
    <section>
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
    </section>
</template>

<style scoped lang="scss">
    section {
        padding-top: 3vh;
        background-color: $blueberry;
        color: $sugar;
        padding-inline: 1.5rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        padding-top: 2rem;
        width: 50vw;
    }

    @media screen and (orientation: landscape) and (min-width: $laptop) {
        section {
            display: grid;
            align-items: center;
            grid-template-columns: 2.5fr 2fr;

            padding-top: unset;
            padding-inline: 6rem;

            img {
                padding-top: 5vh;
                align-self: flex-end;
                justify-self: center;
                width: 30vw;
            }

            h2 {
                font-size: 6rem;
            }

            p {
                font-size: 1.25rem;
            }
        }
    }
</style>
