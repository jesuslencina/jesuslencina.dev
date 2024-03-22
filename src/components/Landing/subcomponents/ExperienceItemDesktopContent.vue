<script setup>
    import LinkButton from "../../Common/LinkButton.vue"

    const props = defineProps(["item", "isMaximizedVersion", "toggleOpen"])

    const accent = props.item?.color
</script>

<template>
    <article :class="isMaximizedVersion ? 'maximized-version' : 'container-item'">
        <img class="logo" :src="item.svg_icon_url" :alt="`${item.place_name}'s logo`" width="100%" height="auto" />
        <div class="socials">
            <LinkButton bgColor="#0b63bd" iconImgPath="/icons/linkedin.svg" :redirectUrl="item.place_linkedin_url" :extraClasses="'icon-only'" />
            <LinkButton :bgColor="item.color" iconImgPath="/icons/world.svg" :redirectUrl="item.place_website_url" :extraClasses="'icon-only'" />
        </div>
        <div class="text">
            <p class="timeframe">{{ `${item.start} - ${item.currently_there ? "Present" : item.end}` }}</p>

            <p class="place">{{ item.place_name }}</p>
            <p class="title">{{ item.title }}</p>
            <ul v-if="!isMaximizedVersion">
                <li>{{ item.achievements[0].split(" ").slice(0, 11).join(" ") }}... <span @click="toggleOpen" class="read-more">Read More</span></li>
            </ul>
            <div v-else>
                <ul>
                    <li v-for="achievement of item.achievements" v-bind:key="achievement">
                        {{ achievement }}
                    </li>
                </ul>
                <div class="close-section">
                    <button @click="toggleOpen">Close</button>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    article {
        width: 40%;
        position: relative;
        background-color: $sugar;
        padding: 4rem 2rem;
        border-radius: 15px;
        display: grid;
        grid-template-columns: 130px 1fr;
        gap: 1.5rem;
        margin-bottom: 5rem;

        &.maximized-version {
            width: 80%;
            padding: 3rem 2rem 2rem 3rem;

            .close-section {
                display: flex;
                justify-content: end;

                button {
                    @include buttonStyles;
                    cursor: pointer;
                    border: none;
                    background-color: v-bind(accent);
                    color: $creamy;
                    font-size: 1rem;
                    padding: 0.75rem 2rem;

                    &:hover {
                        filter: brightness(1.25) saturate(1.25);
                        text-decoration: underline;
                    }
                }
            }
        }

        @media (prefers-color-scheme: dark) {
            background-color: $creamy;
            color: $deepslate;
        }

        p {
            margin: 0;
        }

        .timeframe {
            font-size: 1rem;
        }

        .socials {
            position: absolute;
            top: 2rem;
            right: 2rem;
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
            color: v-bind(accent);
        }

        .title {
            font-size: 1.5rem;
            font-weight: bold;
        }

        ul li {
            line-height: 2.5;
            cursor: default;
        }

        .read-more {
            cursor: pointer;
            color: v-bind(accent);
            text-decoration: underline;
            text-wrap: nowrap;
        }

        @media screen and (max-width: $laptop) {
            display: none;
        }
    }
</style>
