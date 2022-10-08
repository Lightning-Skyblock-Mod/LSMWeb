<template>
  <Sidebar />
  <div :style="{'margin-left': sidebarWidth}">
    <router-view />
  </div>

</template>

<script>
import Home from './views/Home.vue'
import Sidebar from "@/components/sidebar/Sidebar.vue";
import {sidebarWidth} from "@/components/sidebar/state";
export default {
  name: 'App',
  components: {
    Sidebar,
    Home
  },
  setup() {
    return { sidebarWidth }
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
height: 100%;
}
</style>


