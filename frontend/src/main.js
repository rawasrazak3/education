import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import { initSocket } from './socket'


import {
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

// create a pinia instance
let pinia = createPinia()
let app = createApp(App)
setConfig('resourceFetcher', frappeRequest)
let socket = initSocket()
app.provide('$socket', socket)
app.use(pinia)
app.use(router)
app.use(resourcesPlugin)
app.config.globalProperties.$socket = socket

app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)

router.isReady().then(() => {
  app.mount('#app')
})
