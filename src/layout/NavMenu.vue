<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>

<template>
  <el-scrollbar h-full class="bg-#ECEFF3">
    <el-menu
      active-text-color="#ffffff"
      background-color="#ECEFF3"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#1a1a1a"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">
            item one
          </el-menu-item>
          <el-menu-item index="1-2">
            item two
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">
            item three
          </el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>
            item four
          </template>
          <el-menu-item index="1-4-1">
            item one
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><IconMenu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><Document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped>

</style>
