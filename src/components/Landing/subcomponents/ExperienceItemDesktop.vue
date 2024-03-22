<script setup>
    import { ref } from "vue"
    import ExpandableModal from "../../Common/ExpandableModal.vue"
    import ExperienceItemDesktopContent from "./ExperienceItemDesktopContent.vue"

    defineProps(["item"])

    const open = ref(false)

    const toggleOpen = () => {
        open.value = !open.value
    }
</script>

<template>
    <ExperienceItemDesktopContent :item="item" :isMaximizedVersion="false" :toggleOpen="toggleOpen" />
    <ExpandableModal :isOpen="open" :toggleHandler="toggleOpen">
        <ExperienceItemDesktopContent :item="item" :isMaximizedVersion="true" :toggleOpen="toggleOpen" />
    </ExpandableModal>
</template>
