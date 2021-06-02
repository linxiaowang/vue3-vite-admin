<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onMyClick" ref="hw" />
  </div>
</template>

<script setup>
import HelloWorld from "comps/HelloWorld.vue";
import { ref } from "vue";
const hw = ref(null);
const a = ref(1);
const onMyClick = () => {
  console.log("onmyclick");
  hw.value.someMethod();
};
</script>

<style scoped>
</style>