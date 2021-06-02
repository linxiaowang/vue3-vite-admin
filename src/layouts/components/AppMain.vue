<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>