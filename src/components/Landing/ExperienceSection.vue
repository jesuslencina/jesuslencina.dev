<script>
    import { collection, query, getDocs, where } from "firebase/firestore"
    import { hexToFilter } from "css-filter-converter"
    import { db } from "@/firebase/firestore"
    import LinkButton from "../Common/LinkButton.vue"

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
            LinkButton
        },

        async mounted() {
            this.items = []

            const queryToMake = query(collection(db, "experience"), where("type", "==", "Professional"))

            const querySnapshot = await getDocs(queryToMake)
            querySnapshot.forEach((doc) => {
                const item = doc.data()

                const accent = hexToFilter(item.color)

                const expanded = false

                this.items.push({ ...item, accent, expanded })
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
            <article :class="`mobile ${item.expanded ? 'expanded' : ''}`" v-auto-animate v-for="item of items" :key="item.place_name">
                <div class="main-body">
                    <img
                        class="logo"
                        :src="item.svg_icon_url"
                        :alt="`Logo of ${item.place_name}`"
                        :style="{ filter: item.accent.color }"
                        width="100"
                        height="auto"
                    />
                    <div class="text">
                        <p class="timeframe">{{ `${item.start} - ${item.currently_there ? "Present" : item.end}` }}</p>
                        <p class="place" :style="{ color: item.color }">{{ item.place_name }}</p>
                        <p class="title">{{ item.title }}</p>
                    </div>
                </div>

                <div v-if="item.expanded" class="expanded-content">
                    <ul>
                        <li v-for="achievement of item.achievements" :key="achievement">
                            {{ achievement }}
                        </li>
                    </ul>
                    <div class="socials">
                        <LinkButton
                            bgColor="#0b63bd"
                            iconImgPath="/src/assets/graphics/icons/linkedin.svg"
                            :buttonText="`${item.place_name} on Linkedin`"
                            :redirectUrl="item.place_linkedin_url"
                        />
                        <LinkButton
                            :bgColor="item.color"
                            iconImgPath="/src/assets/graphics/icons/world.svg"
                            :buttonText="`${item.place_name}'s website`"
                            :redirectUrl="item.place_website_url"
                        />
                    </div>
                </div>

                <div @click="item.expanded = !item.expanded" class="expand-button">
                    <span>Read {{ !item.expanded ? "more" : "less" }}</span
                    ><img width="30" height="auto" src="/src/assets/graphics/icons/caret.svg" alt="" :style="{ filter: item.accent.color }" />
                </div>
            </article>
            <article class="desktop" v-for="item of items" :key="item.place_name">
                <img
                    class="logo"
                    :src="item.svg_icon_url"
                    :alt="`Logo of ${item.place_name}`"
                    :style="{ filter: item.accent.color }"
                    width="100%"
                    height="auto"
                />
                <div class="socials">
                    <LinkButton
                        bgColor="#0b63bd"
                        iconImgPath="/src/assets/graphics/icons/linkedin.svg"
                        :redirectUrl="item.place_linkedin_url"
                        :extraClasses="'icon-only'"
                    />
                    <LinkButton
                        :bgColor="item.color"
                        iconImgPath="/src/assets/graphics/icons/world.svg"
                        :redirectUrl="item.place_website_url"
                        :extraClasses="'icon-only'"
                    />
                </div>
                <div class="text">
                    <p class="timeframe">{{ `${item.start} - ${item.currently_there ? "Present" : item.end}` }}</p>

                    <p class="place" :style="{ color: item.color }">{{ item.place_name }}</p>
                    <p class="title">{{ item.title }}</p>
                    <ul>
                        <li v-for="achievement of item.achievements" :key="achievement">
                            {{ achievement }}
                        </li>
                    </ul>
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
        margin: 5vh 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        article.mobile {
            display: flex;
            flex-direction: column;
            background-color: $sugar;
            border-radius: 11px;
            padding: 1rem;
            transition: all 1s ease-in-out;
            height: auto;

            .main-body {
                display: grid;
                align-items: center;
                grid-template-columns: 100px 1fr;
                gap: 1rem;

                p {
                    margin: 0;
                }

                .timeframe {
                    font-size: 0.75rem;
                }

                .place {
                    font-size: 1.25rem;
                    margin-top: 0.15rem;
                    font-family: $rubik;
                }
            }

            .expanded-content {
                li {
                    line-height: 1.75;
                    margin: 1rem 0;
                }

                .socials {
                    display: flex;
                    flex-direction: column;
                    padding-inline: 1rem;
                    gap: 1rem;
                }
            }

            .expand-button {
                user-select: none;
                padding-top: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;

                img {
                    transition: transform 0.75s ease-in-out;
                    margin-top: 0.25rem;
                    filter: none !important;
                }
            }

            &.expanded {
                .expand-button img {
                    transform: rotate(180deg);
                }
            }
        }

        article.desktop {
            display: none;
        }
    }

    @media screen and (orientation: landscape) and (min-width: $laptop) {
        section {
            padding-inline: 6rem;
        }

        .container {
            margin-top: 15vh;
            margin-inline: 4vw;
            margin-bottom: 15vh;
            display: flex;
            flex-direction: column;
            gap: 5rem;

            article.mobile {
                display: none;
            }
            article.desktop {
                position: relative;
                background-color: transparent;
                display: grid;
                grid-template-columns: 175px 1fr;
                gap: 1.5rem;
                margin-bottom: 5rem;

                p {
                    margin: 0;
                }

                .timeframe {
                    font-size: 1rem;
                }

                .socials {
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                }

                .place {
                    font-size: 2rem;
                    margin-top: 0.15rem;
                    font-family: $rubik;
                }

                .title {
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                ul li {
                    line-height: 2.5;
                }
            }
        }

        h2 {
            font-size: 6rem;
        }
    }
</style>
