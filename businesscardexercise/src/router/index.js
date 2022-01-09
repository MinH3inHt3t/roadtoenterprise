import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import BusinessCardEditor from
    "../views/businessCardEditor/BusinessCardEditor.vue";
import Layout from "../layout/Layout.vue";
import ChatBubble from "@/components/chat/ChatBubble";
import Home from "../views/Home.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HelloWorld,
        },
        {
            path: "/business-card-editor",
            name: "BusinessCardEditor",
            component: BusinessCardEditor,
        },

        {
            path: "/chat",
            name: "chat",
            component: ChatBubble,
        },

        {
            path: "/layout",
            name: "Layout",
            component: Layout,
        },

        {
            path: "/Home",
            name: "Home",
            component: Home,
        },



    ],
});
export default router;