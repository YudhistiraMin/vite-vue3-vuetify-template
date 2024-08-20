import { createApp, markRaw } from 'vue'
import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import './plugins/axios';

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(PerfectScrollbar);

app.use(vuetify)

app.mount('#app')