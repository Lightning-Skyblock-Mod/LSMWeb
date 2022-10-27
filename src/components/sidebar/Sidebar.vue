

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "@/components/sidebar/state";
import SidebarLink from "@/components/sidebar/SidebarLink.vue";


export default {
  name: "Sidebar",
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{width: sidebarWidth}">
    <h1>
      <span v-if="collapsed">
        <div>LSM </div>
      </span>
      <span v-else>LSM</span>
    </h1>
    <span v-if="collapsed">
      <SidebarLink icon="fas fa-home" to="/"> Home</SidebarLink>
      <SidebarLink icon="fa-brands fa-discord" to="/discord"> Discord</SidebarLink>
      <SidebarLink icon="fa-brands fa-github" to="/github"> Github</SidebarLink>

    </span>
    <span v-else>
      <SidebarLink icon="fas fa-home" to="/"> Home</SidebarLink>
      <SidebarLink icon="fa-brands fa-discord" to="/discord"> Discord</SidebarLink>
      <SidebarLink icon="fa-brands fa-github" to="/github"> Github</SidebarLink>
    </span>


    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-bars"></i>
    </span>

  </div>


</template>

<style>


@font-face {
  font-family: Manrope;
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
}

:root{
  --sidebar-bg-color: #301934;
  --sidebar-item-hover: #A45EE9;
  --sidebar-item-active: #9866C7;
  --font-family: Manrope, sans-serif;
}
</style>

<style scoped>
  .sidebar {
    color: darkslateblue;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
    font-family: var(--font-family);
  }

  .collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
  }

  .rotate-180 {
    transform: rotate(90deg);
    transition: 0.2s linear;
  }


  .font {
    font-family: Manrope, sans-serif;
  }

</style>
