<template>
  <div class="font">
    <router-link :to="to" class="link" :class="{active: isActive}">
      <i class="icon" :class="icon" />

      <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
      </transition>

    </router-link>
  </div>

</template>

<script>
import {useRoute} from "vue-router";
import {computed} from "vue";
import {collapsed} from "@/components/sidebar/state";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  name: "SidebarLink",
  setup(props){
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return {isActive, collapsed }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;

}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

.link.icon{
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}

@font-face {
  font-family: Manrope;
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
}

.font {
  font-family: Manrope, sans-serif;
}

</style>