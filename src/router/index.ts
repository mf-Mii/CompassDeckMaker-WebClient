import {createRouter, createWebHistory} from 'vue-router';
import DeckMakerView from "@/views/DeckMakerView.vue";
import AboutView from "@/views/AboutView.vue";
import TestView_NodeNicoMusic from "@/views/test/TestView_NodeNicoMusic.vue";
import TestView_Scripts from "@/views/test/TestView_Scripts.vue";
import {getConfigValue} from "@/config.ts";

const routes = [
    {
        path: '/',
        component: DeckMakerView,
        meta: {
            title: 'DeckMaker',
        },
    },
    {
        path: '/about',
        component: AboutView,
        meta: {
            title: 'About',
        },
    },
    {
        path: '/test',
        component: TestView_Scripts,
        meta: {
            title: 'Test',
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    document.title = (to.meta.title as string || 'DeckMaker') + getConfigValue('page.title_suffix');
    next();
});

export default router;
