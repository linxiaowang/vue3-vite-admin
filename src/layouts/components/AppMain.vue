<template>
  <el-main>
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </el-main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>