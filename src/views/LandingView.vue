<script>
    import LoadingScreen from "@/components/Common/LoadingScreen.vue"
    import WelcomeSection from "@/components/Landing/WelcomeSection.vue"
    import AboutSection from "@/components/Landing/AboutSection.vue"
    import BackToTop from "@/components/Landing/BackToTop.vue"
    import ExperienceSection from "@/components/Landing/ExperienceSection.vue"
    import ContactSection from "@/components/Landing/ContactSection.vue"

    export default {
        data() {
            return {
                experienceLoading: true
            }
        },

        methods: {
            setLoadingComplete(loadingState) {
                this[loadingState] = false
            }
        },

        components: {
            WelcomeSection,
            AboutSection,
            BackToTop,
            ExperienceSection,
            ContactSection,
            LoadingScreen
        }
    }
</script>

<template>
    <div>
        <LoadingScreen :show="experienceLoading" />
        <WelcomeSection />
        <BackToTop />
        <AboutSection />
        <ExperienceSection :set-loading-complete="setLoadingComplete" />
        <ContactSection />
    </div>
</template>
