import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePageView/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/homepage",
            name: "HomePage",
            component: HomePage,
        },

        // {
        //     path: "/chat",
        //     name: "chat",
        //     component: ChatBubble,
        // },

        // {
        //     path: "/layout",
        //     name: "Layout",
        //     component: Layout,
        // },

        // {
        //     path: "/Home",
        //     name: "Home",
        //     component: Home,
        // },



    ],
});
export default router;