import {createRouter, createWebHistory} from 'vue-router';
import DeckMaker from "@/pages/DeckMaker.vue";
import About from "@/pages/About.vue";
import config from "@/script/vue/config";
import Test from "@/pages/Test.vue";

const routes = [
    {
        path: '/',
        component: DeckMaker,
        meta: {
            title: 'DeckMaker',
        },
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: 'About',
        },
    },
    {
        path: '/test',
        component: Test,
        meta: {
            title: 'DeckMaker',
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    document.title = (to.meta.title || 'DeckMaker') + config.page.title_suffix;
    next();
});

export default router;
