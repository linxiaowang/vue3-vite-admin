<template>
  <div
    class="flex justify-center items-center w-full h-screen bg-cover"
    style="background-image: url(/img/bg.jpg)"
  >
    <div
      class="flex flex-col justify-center items-center w-3/12 -mt-60 p-10 bg-white bg-opacity-80 rounded-lg"
    >
      <h2 class="mb-8">WELCOME TO MY WORLD</h2>
      <el-form class="w-full" :model="form" :rules="rules" ref="ruleForm">
        <el-form-item prop="name">
          <el-input v-model="form.name" prefix-icon="el-icon-user" placeholder="admin"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-lock"
            placeholder="admin"
            @keydown.enter="submitForm('ruleForm')"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="w-full"
            type="primary"
            @click="submitForm('ruleForm')"
            :loading="loading"
          >^点我提交^</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { login } from "service/user";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { setAuthorization } from 'utils/athorization'

const store = useStore();
const router = useRouter();

const form = ref({
  name: "",
  password: "",
});

const rules = ref({
  name: {
    required: true,
    message: "喝! 报上名来",
  },
  password: {
    required: true,
    message: "没有密码？大叫一声——芝麻开门！",
  },
});

const ruleForm = ref(null);
const loading = ref(false);
console.log(store)
const submitForm = () => {
  console.log(ruleForm.value);
  ruleForm.value.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      const { name, password } = form.value;
      let res = await login({
        name,
        password,
      });
      loading.value = false;
      const { avatar, name: userName, id, token, expireTime } = res.data;
      store.commit("user/setAvatar", avatar);
      store.commit("user/setName", userName);
      store.commit("user/setId", id);
      setAuthorization({ token, expireAt: +expireTime });
      router.push({
        path: "/home",
      });
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.login {
  background-image: url("/img/bg.jpg");
}
</style>