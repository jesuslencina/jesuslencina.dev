<script>
    import { collection, query, getDocs, where } from "firebase/firestore"
    import { db } from "@/firebase/firestore"

    import ExperienceItemMobile from "./subcomponents/ExperienceItemMobile.vue"
    import ExperienceItemDesktop from "./subcomponents/ExperienceItemDesktop.vue"

    export default {
        data() {
            return { items: Array }
        },

        props: {
            setLoadingComplete: {
                type: Function
            }
        },

        components: {
            ExperienceItemMobile,
            ExperienceItemDesktop
        },

        async mounted() {
            this.items = []

            const queryToMake = query(collection(db, "experience"), where("type", "==", "Professional"))

            const querySnapshot = await getDocs(queryToMake)
            querySnapshot.forEach((doc) => {
                const item = { ...doc.data(), id: doc.id }
                console.log(item)
                this.items.push(item)
            })

            // Sort by the fixed order from firebase
            this.items.sort((a, b) => a.order - b.order)

            this.setLoadingComplete("experienceLoading")
        }
    }
</script>

<template>
    <section id="experience">
        <h2>Work experience</h2>
        <div class="container">
            <ExperienceItemMobile v-for="item of items" :item="item" :key="`mobile-${item.id}`" />
            <ExperienceItemDesktop v-for="item of items" :item="item" :key="`desktop-${item.id}`" />
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
            padding-inline: 6rem;
        }

        .container {
            margin-top: 15vh;
            margin-inline: 4vw;
            margin-bottom: 15vh;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        h2 {
            font-size: 6rem;
        }
    }
</style>
