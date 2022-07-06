import { createApp } from 'vue';
import '../index.d';
import App from './App.vue';
import router from './core/router';

createApp(App).use(router).mount('#app');
