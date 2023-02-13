import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'

import App from '@/App.vue'
import router from '@/router/routes'

import '@/assets/styles/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Notifications)

app.mount('#app')


