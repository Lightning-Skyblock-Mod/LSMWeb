import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const base = "/";

const routes = [
    {
        path: base,
        name: "Home",
        component: Home,
        includeInHeader: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;