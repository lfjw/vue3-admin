<template>
  <div class="login-container">
    <div ref="root">This is a root element</div>
    <div ref="elform">1</div>
    <el-form :model="form" :rules="rules" ref='ddd' label-width="100px" class="login-form">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getForm from "./form";
export default defineComponent({
  setup() {
    const { rules, form } = getForm();
    return {
      rules,
      form,
    };
  },
});
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
