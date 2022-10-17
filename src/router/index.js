import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Discord from "@/views/Discord.vue";

const base = "/";

const routes = [
    {
        path: base,
        name: "Home",
        component: Home,
    },
    { path: base + "discord", component: Discord }




];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
