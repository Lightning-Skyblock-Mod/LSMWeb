import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Discord from "@/views/Discord.vue";
import NotFound from "../views/404.vue";

const base = "/";

const routes = [
    {
        path: base,
        name: "Home",
        component: Home,
    },
    { path: base + "discord", component: Discord },
    { path: "/:catchAll(.*)", component: NotFound, name: "404" }




];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
