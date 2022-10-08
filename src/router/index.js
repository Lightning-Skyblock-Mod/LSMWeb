import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Discord from "@/views/Discord.vue";

const base = "/lsm";

const routes = [
    {
        path: base + "/home",
        name: "Home",
        component: Home,
    },

    { path: base, redirect: base + "/home" },
    { path: "/", redirect: base + "/home" },
    { path: base + "discord", component: Discord }




];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;