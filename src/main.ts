// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
// Importar estilos do Vuetify
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(router);
app.use(vuetify)
app.mount('#app')