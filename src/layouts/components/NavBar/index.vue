<template>
  <div class="relative h-16 pl-7 pr-7 shadow-sm">
    <!-- 面包屑 -->
    <breadcrumb class="float-left"></breadcrumb>

    <!-- 右侧菜单 -->
    <div class="flex items-center h-full float-right">
      <el-dropdown>
        <div class="inline-flex items-center">
          <el-avatar
            class="mr-4"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span class="name">王小虎</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "./Breadcrumb.vue";
import { logout } from "service/user";
import { useRouter } from "vue-router";
const router = useRouter();
const exit = () => {
  logout();
  router.push({
    path: "login",
  });
};
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