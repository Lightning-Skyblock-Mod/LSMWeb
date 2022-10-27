<template>
  <div class="gradient__bg">
    <Loading v-if="isLoading" />
    <Sidebar />
    <div style="{'margin-left': sidebarWidth}">
      <router-view/>
    </div>
    



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
.gradient__bg {
  background:-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* safari 5.1+,chrome 10+ */
  background:-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* opera 11.10+ */
  background:-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* ie 10+ */
  background:-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);

  /* global 92%+ browsers support */
  background:radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
}
</style>


