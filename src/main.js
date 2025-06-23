import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const piania = createPinia();


createApp(App).use(piania).mount('#app')
