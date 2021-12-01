<template>
  <el-dropdown>
    <div class="inline-flex items-center">
      <el-avatar class="mr-4" :src="avatar"></el-avatar>
      <span class="name">{{ name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="exit">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {ElAvatar} from 'element-plus'
import { logout } from "service/user";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore()
const avatar = store.getters['user/avatar'];
const name = store.getters['user/name'];
const exit = () => {
  logout();
  router.push({
    path: "login",
  });
};

</script>

<style lang="scss" scoped>
</style>