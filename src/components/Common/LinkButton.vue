<script setup>
    defineProps(["extraClasses", "bgColor", "redirectUrl", "iconImgPath", "buttonText"])
</script>

<template>
    <a :href="redirectUrl" target="_blank" :style="{ backgroundColor: bgColor ?? '#445faa' }" :class="extraClasses">
        <img v-if="iconImgPath" :src="iconImgPath" :alt="buttonText" />
        <span v-if="buttonText">{{ buttonText }}</span>
    </a>
</template>

<style scoped lang="scss">
    a {
        @include buttonStyles;
        text-align: center;

        display: grid;
        grid-template-columns: 30px 1fr 30px;
        justify-content: center;
        align-items: center;
        color: $sugar;

        img {
            width: 25px;
        }

        transition: all 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
            filter: brightness(1.25) saturate(1.25);
        }

        &.icon-only,
        &.text-only {
            display: flex;
            border-radius: 99px;
            padding: 0.6rem;
            img {
                width: 20px;
            }
        }

        &.big-complete {
            padding: 0.75rem 1rem;
            grid-template-columns: 30px 1fr;
            gap: 0.5rem;
        }

        &.smaller-font-size {
            font-size: 0.75rem;
        }
    }
</style>
