<script>
    import LinkButton from "@/components/Common/LinkButton.vue"

    export default {
        components: {
            LinkButton
        }
    }
</script>

<template>
    <section id="contact">
        <strong> Let's connect and keep in touch :)</strong>
        <p>Feel free to reach me out on any of my platforms</p>
        <div class="button-container">
            <LinkButton
                buttonText="in/jesuslencina"
                redirectUrl="https://www.linkedin.com/in/jesuslencina/"
                bgColor="#1293e8"
                iconImgPath="/icons/linkedin.svg"
                extraClasses="big-complete"
                externalTab
            />

            <LinkButton
                buttonText="@jesuslencina"
                redirectUrl="https://github.com/jesuslencina"
                bgColor="#344455"
                iconImgPath="/icons/github.svg"
                extraClasses="big-complete"
                externalTab
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
        color: $sugar;
        background-color: $blueberry-weak;
        padding-inline: 2rem;

        strong {
            color: $creamy;
            font-family: $rubik;
            font-size: 1.75rem;
        }

        background-image: url(/src/assets/graphics/objects-mobile.webp);
        background-position: center;
        background-size: cover;
    }

    .button-container {
        margin-top: 4rem;
        display: flex;
        gap: 1.5rem;
        flex-direction: column;
    }

    @media screen and (min-width: $laptop) {
        section {
            min-height: 70vh;
            background-image: url(/src/assets/graphics/objects-desktop.webp);

            strong {
                font-size: 3rem;
            }

            p {
                font-size: 1.25rem;
            }
        }

        .button-container {
            flex-direction: row;
        }
    }
</style>
