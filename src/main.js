import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import router from './router'
import { createPinia } from 'pinia'
import i18n from './i18n'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
})

const app = createApp(App)
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(i18n)
app.mount('#app')
