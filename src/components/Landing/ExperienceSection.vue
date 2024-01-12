<script>
    import { collection, query, getDocs, where } from "firebase/firestore"
    import { hexToFilter } from "css-filter-converter"
    import { db } from "@/firebase/firestore"

    export default {
        data() {
            return { items: Array }
        },

        props: {
            setLoadingComplete: {
                type: Function
            }
        },

        async mounted() {
            this.items = []

            const queryToMake = query(collection(db, "experience"), where("type", "==", "Professional"))

            const querySnapshot = await getDocs(queryToMake)
            querySnapshot.forEach((doc) => {
                const item = doc.data()

                const accent = hexToFilter(item.color)

                this.items.push({ ...item, accent })
            })

            this.setLoadingComplete("experienceLoading")
        }
    }
</script>

<template>
    <section id="experience">
        <h2>Work experience</h2>
        <div class="container">
            <article v-for="item of items" :key="item.place_name">
                <img
                    class="logo"
                    :src="item.svg_icon_url"
                    :alt="`Logo of ${item.place_name}`"
                    :style="{ filter: item.accent.color }"
                    width="150"
                    height="auto"
                />
                <div class="text">
                    <p>{{ `${item.start} - ${item.currently_there ? "Present" : item.end}` }}</p>
                </div>
            </article>
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
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    article {
        display: grid;
        align-items: center;
        grid-template-columns: 150px 1fr;
        border-radius: 11px;
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.349);
    }

    @media screen and (orientation: landscape) and (min-width: $laptop) {
        section {
            padding-inline: 6rem;
        }

        h2 {
            font-size: 6rem;
        }
    }
</style>
