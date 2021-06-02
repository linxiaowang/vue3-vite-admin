<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      >
      </sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import { computed } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";
import variables from "styles/variables.module.scss";

const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path
});
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100%;
  background-color: #eef1f6;
}
</style>