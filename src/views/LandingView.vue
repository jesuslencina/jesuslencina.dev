<script>
    import LoadingScreen from "@/components/Common/LoadingScreen.vue"
    import WelcomeSection from "@/components/Landing/WelcomeSection.vue"
    import AboutSection from "@/components/Landing/AboutSection.vue"
    import BackToTop from "@/components/Landing/BackToTop.vue"
    import ExperienceSection from "@/components/Landing/ExperienceSection.vue"

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
    </div>
</template>
