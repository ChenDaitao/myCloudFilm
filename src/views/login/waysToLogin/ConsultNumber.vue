<template>
  <div class="login-in">
    <van-field
      left-icon="graphic"
      placeholder="请输入就诊号"
      type="number"
      center
    />
    <van-field
      center
      clearable
      left-icon="comment"
      placeholder="请输入就诊姓名"
    >
    </van-field>
    <van-button round type="primary" size="small" class="login-button"
      >登录</van-button
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
