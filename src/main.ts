import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)

app.mount('#app')
