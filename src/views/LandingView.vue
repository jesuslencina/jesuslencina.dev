<script setup>
    import { onMounted } from "vue"

    import LoadingScreen from "@/components/Common/LoadingScreen.vue"
    import WelcomeSection from "@/components/Landing/WelcomeSection.vue"
    import AboutSection from "@/components/Landing/AboutSection.vue"
    import BackToTop from "@/components/Landing/BackToTop.vue"
    import ExperienceSection from "@/components/Landing/ExperienceSection.vue"
    import ContactSection from "@/components/Landing/ContactSection.vue"

    import { dataStore } from "@/store/dataStore"

    const store = dataStore()

    onMounted(() => {
        store.fetchData()
    })
</script>

<template>
    <div>
        <LoadingScreen :show="store.loading" />
        <WelcomeSection />
        <BackToTop />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
    </div>
</template>
