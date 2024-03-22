import { defineStore } from "pinia"
import { getData } from "@/utils/getData"

export const dataStore = defineStore("data", {
    state: () => {
        return {
            data: {},
            loading: true
        }
    },
    getters: {
        getExperienceItems() {
            if (this.data?.experience_items?.length) {
                return this.data?.experience_items.sort((item) => item.order)
            }
        }
    },
    actions: {
        async fetchData() {
            try {
                this.loading = true
                const value = await getData()
                this.data = value
            } catch (error) {
                alert("There was an error getting the data.")
            } finally {
                this.loading = false
            }
        }
    }
})
