import { createApp } from "vue"
import { autoAnimatePlugin } from "@formkit/auto-animate/vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import "./assets/scss/main.scss"

const app = createApp(App)

app.use(router)

app.use(autoAnimatePlugin)

app.use(createPinia())

app.mount("#app")
