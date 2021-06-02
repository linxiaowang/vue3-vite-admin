<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import SideBar from "./components/SideBar/index.vue";
import NavBar from "./components/NavBar/index.vue";
import AppMain from "./components/AppMain.vue";
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .sidebar-container {
    width: 200px;
    height: 100vh;
    overflow: auto;
    background-color: #fff;
    box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
  }
  .main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>