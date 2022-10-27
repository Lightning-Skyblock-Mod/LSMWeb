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
    { path: base + "discord", component: Discord, name: "Discord" },
    { path: "/:catchAll(.*)", component: NotFound, name: "404" },
    { path: "/github", name: "Github", beforeEnter(to, from, next) { 
        window.location.href = "https://github.com/Lightning-Skyblock-Mod/LSMWeb"; 
    }
}




];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.name} - LSM`;
    next();
});

export default router;
