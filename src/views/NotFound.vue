<script>
    import LinkButton from "@/components/Common/LinkButton.vue"

    export default {
        components: {
            LinkButton
        }
    }
</script>

<template>
    <main>
        <h1>404</h1>
        <h2>Not found</h2>
        <LinkButton redirectUrl="/" buttonText="Back to main page" extraClasses="text-only" :externalTab="false" />
    </main>
</template>

<style lang="scss" scoped>
    main {
        width: 100%;
        min-height: 99vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }

    h2 {
        font-family: $roboto;
    }

    h1 {
        color: $bulbasaur;
        font-size: 8rem;
    }
</style>
