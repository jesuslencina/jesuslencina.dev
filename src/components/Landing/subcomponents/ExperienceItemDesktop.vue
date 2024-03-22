<script setup>
    import { ref } from "vue"
    import LinkButton from "../../Common/LinkButton.vue"

    const props = defineProps(["item"])

    const accent = props.item?.color

    const expanded = ref(false)
</script>

<template>
    <article>
        <img class="logo" :src="item.svg_icon_url" :alt="`${item.place_name}'s logo`" width="100%" height="auto" />
        <div class="socials">
            <LinkButton bgColor="#0b63bd" iconImgPath="/icons/linkedin.svg" :redirectUrl="item.place_linkedin_url" :extraClasses="'icon-only'" />
            <LinkButton :bgColor="item.color" iconImgPath="/icons/world.svg" :redirectUrl="item.place_website_url" :extraClasses="'icon-only'" />
        </div>
        <div class="text" v-auto-animate>
            <p class="timeframe">{{ `${item.start} - ${item.currently_there ? "Present" : item.end}` }}</p>

            <p class="place">{{ item.place_name }}</p>
            <p class="title">{{ item.title }}</p>
            <ul v-if="!expanded">
                <li>{{ item.achievements[0].split(" ").slice(0, 11).join(" ") }}... <span @click="expanded = true" class="read-more">Read More</span></li>
            </ul>
            <ul v-if="expanded">
                <li v-for="achievement of item.achievements" :key="achievement">
                    {{ achievement }}
                </li>
                <span @click="expanded = false" class="read-more">Read Less</span>
            </ul>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    article {
        position: relative;
        background-color: $sugar;
        padding: 4rem 2rem;
        border-radius: 15px;
        display: grid;
        grid-template-columns: 130px 1fr;
        gap: 1.5rem;
        margin-bottom: 5rem;

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
        }

        @media screen and (max-width: $laptop) {
            display: none;
        }
    }
</style>
