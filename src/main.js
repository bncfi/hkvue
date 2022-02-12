import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css' //global css file

createApp(App).use(router).mount('#app')
