<template>
    <i v-if="icon" class="sub-el-icon" :class="icon"></i>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    icon: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    }
})
</script>

<style lang="scss" scoped>

</style>