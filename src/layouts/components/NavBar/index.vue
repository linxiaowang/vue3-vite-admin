<template>
  <div class="relative flex items-center justify-between h-16 pl-7 pr-7 shadow-sm">
    <!-- 面包屑 -->
    <breadcrumb class="float-left"></breadcrumb>

    <!-- 右侧菜单 -->
    <div class="flex items-center h-full float-right">
      <Avatar/>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "./Breadcrumb.vue";
import Avatar from './Avatar.vue'
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  overflow: hidden;
  padding: 0 30px;
}
</style>