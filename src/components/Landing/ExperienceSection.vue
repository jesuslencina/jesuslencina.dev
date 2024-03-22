<script setup>
    import ExperienceItemMobile from "./subcomponents/ExperienceItemMobile.vue"
    import ExperienceItemDesktop from "./subcomponents/ExperienceItemDesktop.vue"

    import { dataStore } from "@/store/dataStore"

    const store = dataStore()
</script>

<template>
    <section id="experience" v-if="store.getExperienceItems?.length">
        <h2>Work experience</h2>
        <div class="container">
            <ExperienceItemMobile v-for="item of store.getExperienceItems" :item="item" :key="`mobile-${item.order}`" />
            <ExperienceItemDesktop v-for="item of store.getExperienceItems" :item="item" :key="`desktop-${item.order}`" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        padding-inline: 1.5rem;
    }

    h2 {
        color: $blueberry;
        font-size: 3rem;
    }

    .container {
        margin: 5vh 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media screen and (min-width: $laptop) {
        section {
            padding-inline: 3rem;
        }

        .container {
            margin-top: 15vh;
            margin-inline: 4vw;
            margin-bottom: 15vh;
            flex-flow: row wrap;
            justify-content: center;
            gap: 3rem;
        }

        h2 {
            font-size: 6rem;
        }
    }
</style>
