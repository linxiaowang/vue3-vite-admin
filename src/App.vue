<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      size: 'small',
      zIndex: 3000,
    }
  },
})
</script>

<template>
  <ElConfigProvider :size="size" :z-index="zIndex">
    <RouterView />
  </ElConfigProvider>
</template>
