<script setup>
    import { RouterView } from "vue-router"
    import { inject } from "@vercel/analytics"

    inject()
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
