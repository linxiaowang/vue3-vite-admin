<template>
  <h1>{{ msg }}</h1>
  <p @click="$store.commit('add')">{{ $store.state.counter }}</p>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Comp></Comp>
  <button @click="onClick">defineEmit</button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <a href="">xixi</a>
</template>

<script setup>
import Comp from "comps/Comp.vue";
import { defineProps, reactive, defineEmit, useContext } from "vue";

//属性定义
const props = defineProps({
  msg: String,
});
console.log(props);

//获取上下文
const ctx = useContext();
ctx.expose({
  someMethod() {
    console.log("some message from helloworld");
  },
});
console.log(ctx);

// 定义事件
const emit = defineEmit(["myclick"]);

const state = reactive({ count: 0 });

// 请求
fetch("/api/getUsers")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

const onClick = () => {
  emit("myclick");
  // ctx.emit("myclick");
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
