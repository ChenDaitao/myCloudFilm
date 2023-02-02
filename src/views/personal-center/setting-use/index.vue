<!--
 * @Date: 2023-02-01 22:16:06
 * @LastEditTime: 2023-02-02 14:29:33
 * @Description:  
-->
<template>
  <div id="setting-use" class="main-content-views">
    <section class="setting-modify">
      <van-field
        class="border-top"
        readonly
        label="更换手机号"
        v-model="userStore.secretPhone"
        right-icon="arrow"
        @click="toNextPage('PHONE')"
      />
      <!-- <van-field
        class="border-bottom"
        readonly
        label="修改密码"
        right-icon="arrow"
        @click="toNextPage('PASSWORD')"
      /> -->
    </section>
    <van-button round @click="layoutLogin">退出登录</van-button>
  </div>
</template>

<script lang="ts" setup>
import { confirmUseTips } from "@/hook/tipsDialog";
import router from "@/router/index";
import userStore from "@/stores/modules/user";

/**
 * @description: 处理设置页面跳转
 * @param {*} type
 * @return {*}
 */
function toNextPage(type: string) {
  if (type == "PHONE") {
    router.push("/system/modify-phone");
  } else router.push("/system/modify-pwd");
}

/**
 * @description: 退出登录提示
 * @return {*}
 */
function layoutLogin() {
  const params = {
    title: "温馨提示",
    message: "确定退出登录吗？",
  };
  confirmUseTips(params, () => {
    console.log("退出登录");
    router.push("/login");
  });
}
</script>

<style lang="scss" scoped>
#setting-use {
  .setting-modify {
    margin: 10px 0;
  }
  .van-button {
    width: 100%;
  }
}
</style>
