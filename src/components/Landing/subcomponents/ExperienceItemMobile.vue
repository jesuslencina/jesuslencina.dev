<script setup>
    import { ref } from "vue"
    import LinkButton from "../../Common/LinkButton.vue"

    defineProps(["item"])

    const expanded = ref(false)
</script>

<template>
    <article :class="`${expanded ? 'expanded' : ''}`" v-auto-animate>
        <div class="main-body">
            <img class="logo" :src="item.svg_icon_url" :alt="`Logo of ${item.place_name}`" width="90" height="auto" />
            <div class="text">
                <p class="timeframe">{{ `${item.start} - ${item.currently_there ? "Present" : item.end}` }}</p>
                <p class="place" :style="{ color: item.color }">{{ item.place_name }}</p>
                <p class="title">{{ item.title }}</p>
            </div>
        </div>

        <div v-if="expanded" class="expanded-content">
            <p v-for="achievement of item.achievements" :key="achievement">{{ achievement }}</p>

            <div class="socials">
                <LinkButton
                    bgColor="#0b63bd"
                    iconImgPath="/icons/linkedin.svg"
                    :buttonText="`${item.place_name} on Linkedin`"
                    :extraClasses="'smaller-font-size'"
                    :redirectUrl="item.place_linkedin_url"
                />
                <LinkButton
                    :bgColor="item.color"
                    iconImgPath="/icons/world.svg"
                    :buttonText="`${item.place_name}'s website`"
                    :extraClasses="'smaller-font-size'"
                    :redirectUrl="item.place_website_url"
                />
            </div>
        </div>

        <div @click="expanded = !expanded" class="expand-button">
            <span>Read {{ !expanded ? "more" : "less" }}</span
            ><img width="30" height="auto" src="/icons/caret.svg" alt="" />
        </div>
    </article>
</template>

<style lang="scss" scoped>
    article {
        display: flex;
        flex-direction: column;
        background-color: $sugar;
        border-radius: 11px;
        padding: 1rem;
        transition: all 1s ease-in-out;
        height: auto;

        @media (prefers-color-scheme: dark) {
            background-color: $creamy;
            color: $deepslate;
        }

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
            p {
                width: 90%;
            }

            .socials {
                margin-top: 1.5rem;
                display: flex;
                flex-direction: column;
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

        @media screen and (min-width: $laptop) {
            display: none;
        }
    }
</style>
