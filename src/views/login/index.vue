<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

interface RuleForm {
  name: string
  password: string
}
const ruleForm = reactive<RuleForm>({
  name: '',
  password: '',
})

const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules<RuleForm>>({
  name: [{
    required: true,
    message: 'required',
  }],
  password: [
    {
      required: true,
      message: 'required',
    },
  ],
})

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    // if (valid)
    // console.log('submit!')
    // else
    // console.log('error submit!', fields)
  })
}

function resetForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.resetFields()
}
</script>

<template>
  <div flex items-center justify-center w-screen h-screen>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">
          Reset
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
