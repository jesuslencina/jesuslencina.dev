<script>
    export default {
        props: {
            extraClasses: String,
            bgColor: String,
            redirectUrl: String,
            iconImgPath: String,
            buttonText: String
        }
    }
</script>

<template>
    <a :href="redirectUrl" target="_blank" :style="{ backgroundColor: bgColor }" :class="extraClasses">
        <img :src="iconImgPath" :alt="buttonText" />
        <span v-if="buttonText">{{ buttonText }}</span>
    </a>
</template>

<style scoped lang="scss">
    a {
        padding: 0.25rem 0.5rem;
        border-radius: 9px;
        font-family: $rubik;
        display: grid;
        grid-template-columns: 30px 1fr 30px;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: $sugar;

        img {
            width: 25px;
        }

        transition: all 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
            filter: brightness(1.75);
        }

        &.icon-only {
            display: flex;
            border-radius: 99px;
            padding: 0.6rem;
            img {
                width: 20px;
            }
        }
    }
</style>
