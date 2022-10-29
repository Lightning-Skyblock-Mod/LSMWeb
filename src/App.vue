<template>
    <Loading v-if="isLoading" />
    <Sidebar />
    <div style="{'margin-left': sidebarWidth}">
      <router-view/>
    </div>
    





</template>

<script>
import Home from './views/Home.vue'
import Sidebar from "@/components/sidebar/Sidebar.vue";
import {sidebarWidth} from "@/components/sidebar/state";
import Loading from "./components/Loading.vue";
export default {
  name: 'App',
  components: {
    Sidebar,
    Home,
    Loading
  },
  setup() {
    return { sidebarWidth }
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
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

<style scoped>
</style>


