

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
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>LSM</span>
    </h1>

    <SidebarLink icon="fas fa-home" to="/lsm/home">Home</SidebarLink>

    <span
      class="collapse-icon"
      :class="{'rotate-180': collapsed}"
      @click="toggleSidebar">
      <i class="fas fa-angle-double-left"></i>
    </span>

  </div>


</template>

<style>
:root{
  --sidebar-bg-color: #301934;
  --sidebar-item-hover: #A45EE9;
  --sidebar-item-active: #9866C7;
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
  }

  .collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
  }

  .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }

</style>