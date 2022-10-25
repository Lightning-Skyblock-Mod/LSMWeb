import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Discord from "@/views/Discord.vue";
import NotFound from "../views/404.vue";

const base = "/";

const routes = [
    {
        path: base,
        name: "Home - LSM",
        component: Home,
    },
    { path: base + "discord", component: Discord, name: "Discord - LSM" },
    { path: "/:catchAll(.*)", component: NotFound, name: "404 - LSM" }




];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;
