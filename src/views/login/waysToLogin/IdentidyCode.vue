<!--
 * @Date: 2023-01-30 12:21:32
 * @LastEditTime: 2023-01-30 14:29:51
 * @Description: 
-->
<template>
  <div class="login-in">
    <van-field
      left-icon="graphic"
      placeholder="请输入本人身份证号"
      type="number"
      center
    />
    <van-field
      center
      clearable
      left-icon="comment"
      placeholder="请输入本人姓名"
    >
    </van-field>
    <van-button round type="primary" size="small" class="login-button"
      >登录</van-button
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
