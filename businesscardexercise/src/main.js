import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'; //Here
import router from './router/index';

createApp(App).use(router).mount('#app')


