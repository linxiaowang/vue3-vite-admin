<template>
  <el-breadcrumb class="inline-block text-sm  " separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          class="text-gray-400 cursor-text"
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
        >
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)"> {{ item.meta.title }} </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { compile } from "path-to-regexp";
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const levelList = ref(null);
const router = useRouter();
const route = useRoute();

const getBreadcrumb = () => {
  let matched = route.matched.filter((item) => item.meta && item.meta.title);

  // 首页判断
  const first = matched[0];
  if (first.path !== "/") {
    matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
  }

  // 拼出跳转数据
  levelList.value = matched.filter((item) => {
    return item.meta && item.meta.title && item.meta.breadcrumn != false;
  });
};

// 手动解析path中可能解析的参数
const pathCompile = (path) => {
  let toPath = compile(path);
  return toPath(route.params);
};

const handleLink = (item) => {
  const { redirect, path } = item;
  if (!redirect) {
    router.push(redirect);
    return;
  }
  router.push();
};

// 首次调用
getBreadcrumb();

// 监控路由变化
watch(route, getBreadcrumb);
</script>

<style lang="scss" scoped>
</style>