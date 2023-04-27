<template>
  <a-card class="login-card" title="XXXXXXX平台">
    <a-form class="login-form" :model="form" :label-col="{span: 6}" :wrapper-col="{span: 16}">
      <a-form-item label="账号">
        <a-input v-model:value="form.username" placeholder="请输入用户名"></a-input>
      </a-form-item>
      <a-form-item label="密码">
        <a-input v-model:value="form.pwd" placeholder="请输入密码"></a-input>
      </a-form-item>
      <a-button style="margin-left: 10rem;" @click="login">登录</a-button>
    </a-form>
  </a-card>
</template>

<script setup  lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const form = reactive({
  username: null,
  pwd: null
})

const login = () => {
  if (form.username == "admin" && form.pwd == "12345") {
    router.push({ path: '/index' })
  }
}
</script>

<style lang="less">
.login-card {
  width: 30rem;
  position: absolute;
  top: 25vh;
  left: 35vw;
  background-color: #D4E9EA;
  color: #fff;
  .login-form {
    padding: 2rem 3rem;
  }
}
</style>