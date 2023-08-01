<script setup lang="ts">
import TopBar from './TopBar.vue'
import NavMenu from './NavMenu.vue'
</script>

<template>
  <TopBar />
  <div flex="~" h="[calc(100%-2.75rem)]">
    <NavMenu />
    <div flex flex-1 class="bg-#ECEFF3">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
