<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="avatar-wrapper">
        <el-avatar
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <span class="name">王小虎</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  overflow: hidden;
  padding: 0 30px;

  .right-menu {
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .avatar-wrapper {
    display: inline-flex;
    align-items: center;

    .avatar{
      margin-right: 10px;
    }
  }
}
</style>