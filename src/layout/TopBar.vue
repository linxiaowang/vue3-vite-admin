<script setup lang="ts">
import TopTools from './TopTools.vue'
import logoPic from '~/assets/images/yealink-en.png'
</script>

<template>
  <div h-11 px-4 bg-white text-base flex="~ justify-between items-center">
    <div flex="~ items-center">
      <img
        :src="logoPic"
        alt=""
      >
      <span mx-1>|</span>
      <div text-sm pt-1>
        下单管理平台
      </div>
    </div>
    <div>
      <TopTools />
    </div>
  </div>
</template>

<style scoped>

</style>
