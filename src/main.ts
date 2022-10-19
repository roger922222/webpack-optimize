import App from '@/App.vue'
import { createApp } from 'vue'
import router from '@/routes'
import { createPinia } from 'pinia'

import '@/style.css'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')