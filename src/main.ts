import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {initConfig} from "@/config.ts";
import {getResourcesMap} from "@/script/resources.ts";

// 開発用に設定を一部上書き
initConfig();

// リソースマップの確認&更新
await getResourcesMap(true);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
