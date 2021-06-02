<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onMyClick" ref="hw" />
  </div>
</template>

<script setup>
import HelloWorld from "comps/HelloWorld.vue";
import { ref, reactive } from "vue";
const state = reactive({
  test: 1
})
const hw = ref(null);
const a = ref(1);
const onMyClick = () => {
  console.log("onmyclick");
  hw.value.someMethod();
};
</script>

<style scoped>
</style>