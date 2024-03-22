<script setup>
    const props = defineProps(["excludedItems", "customClassname"])
</script>

<template>
    <ul :class="props.customClassname ?? ''">
        <li v-if="!props?.excludedItems?.includes('home')">
            <a href="#home">
                <span>Home</span>
                <img src="/src/assets/graphics/icons/house.svg" alt="Go to Home" />
            </a>
        </li>
        <li>
            <a href="#about">
                <span>About</span>
                <img src="/src/assets/graphics/icons/info.svg" alt="Go to About section" />
            </a>
        </li>
        <li>
            <a href="#experience">
                <span>Experience</span>
                <img src="/src/assets/graphics/icons/briefcase.svg" alt="Go to Experience section" />
            </a>
        </li>
        <li v-if="!props?.excludedItems?.includes('showcase')">
            <a href="#showcase">
                <span>Showcase</span>
                <img src="/src/assets/graphics/icons/folder.svg" alt="Go to Showcase section" />
            </a>
        </li>
        <li>
            <a href="#contact">
                <span>Contact</span>
                <img src="/src/assets/graphics/icons/balloon.svg" alt="Go to Contact section" />
            </a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        font-size: 1.15rem;

        &.welcome-screen {
            position: absolute;
            z-index: 1;
            top: 2vh;
            right: 1rem;
        }
    }

    img {
        width: 2rem;
    }

    a {
        display: flex;
        justify-content: flex-end;
        text-align: end;
        gap: 0.75rem;
        color: $deepslate;
        user-select: none;

        &:hover,
        &:active {
            filter: saturate(20);
        }
    }

    @media screen and (min-width: $laptop) {
        ul {
            font-size: 1.25rem;
            gap: 1.75rem;
        }

        img {
            width: 2.5rem;
        }
    }

    @media screen and (prefers-color-scheme: dark) {
        a {
            color: $sugar;
        }

        img {
            filter: brightness(10);
        }
    }
</style>
