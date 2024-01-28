import { createRouter, createWebHistory } from "vue-router"
import LandingView from "../views/LandingView.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: LandingView
        },
        {
            path: "/:notFound",
            name: "NotFound",
            component: NotFound
        }
    ]
})

export default router
