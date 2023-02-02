<!--
 * @Date: 2023-01-30 12:21:32
 * @LastEditTime: 2023-01-30 14:29:44
 * @Description: 
-->
<template>
  <div class="login-in">
    <van-field
      left-icon="graphic"
      placeholder="请输入检查登记时的手机号"
      type="tel"
      center
    />
    <van-field
      center
      left-icon="comment"
      placeholder="请输入短信验证码"
      class="send-verify"
    >
    </van-field>
    <!--  <van-button size="small" type="default" round class="send-button"
        >发送验证码</van-button
      > -->
    <van-button round type="primary" size="small" class="login-button"
      >登录</van-button
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
