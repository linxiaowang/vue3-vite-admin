<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const router = useRouter()

function handleCommand(command: string) {
  switch (command) {
    case 'exit':
      router.push('/login')
      break

    default:
      break
  }
}
</script>

<template>
  <div>
    <el-dropdown @command="handleCommand">
      <span flex="~ items-center">
        <el-avatar size="small" :src="circleUrl" />
        <el-icon class="el-icon--right">
          <ArrowDown />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="exit">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>

</style>
