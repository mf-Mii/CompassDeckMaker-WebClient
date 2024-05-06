import { createApp } from 'vue'
import App from './App.vue'
import config from "@/script/vue/config";
import router from "@/script/vue/router";

const app = createApp(App, config);
app.use(router);
app.config.globalProperties.$config = config;
app.mount('#app')
