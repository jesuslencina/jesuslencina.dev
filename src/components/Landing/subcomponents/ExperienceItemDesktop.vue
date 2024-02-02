<script>
    import LinkButton from "../../Common/LinkButton.vue"

    export default {
        props: {
            item: Object
        },

        data() {
            return {
                accent: this.item.color,
                expanded: false
            }
        },

        components: {
            LinkButton
        }
    }
</script>

<template>
    <article>
        <img class="logo" :src="this.item.svg_icon_url" :alt="`${this.item.place_name}'s logo`" width="100%" height="auto" />
        <div class="socials">
            <LinkButton
                bgColor="#0b63bd"
                iconImgPath="/icons/linkedin.svg"
                :redirectUrl="this.item.place_linkedin_url"
                externalTab
                :extraClasses="'icon-only'"
            />
            <LinkButton
                :bgColor="this.item.color"
                iconImgPath="/icons/world.svg"
                :redirectUrl="this.item.place_website_url"
                externalTab
                :extraClasses="'icon-only'"
            />
        </div>
        <div class="text" v-auto-animate>
            <p class="timeframe">{{ `${this.item.start} - ${this.item.currently_there ? "Present" : this.item.end}` }}</p>

            <p class="place">{{ this.item.place_name }}</p>
            <p class="title">{{ this.item.title }}</p>
            <ul v-if="!expanded">
                <li>{{ this.item.achievements[0].split(" ").slice(0, 11).join(" ") }}... <span @click="expanded = true" class="read-more">Read More</span></li>
            </ul>
            <ul v-if="expanded">
                <li v-for="achievement of this.item.achievements" :key="achievement">
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
