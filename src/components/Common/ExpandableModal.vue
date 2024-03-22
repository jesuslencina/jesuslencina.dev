<script setup>
    defineProps(["isOpen", "toggleHandler"])
</script>

<template>
    <Transition name="fade">
        <div v-if="isOpen" @click.self="toggleHandler" @wheel.prevent @touchmove.prevent @scroll.prevent class="modal-container">
            <slot />
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
    .fade-enter-active {
        opacity: 0;
    }
    .fade-enter-to {
        animation: fade 0.25s ease-in-out;
    }
    .fade-leave-to {
        animation: fade 0.25s ease-in-out reverse;
    }

    .modal-container {
        z-index: 2;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(20, 20, 20, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
