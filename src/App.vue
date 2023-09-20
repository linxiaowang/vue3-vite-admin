<script setup lang="ts">
const zIndex = ref(3000)
const size = ref('small')
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <RouterView />
  </el-config-provider>
</template>

 <style scoped>

 </style>
