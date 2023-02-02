<!--
 * @Date: 2023-02-01 12:29:38
 * @LastEditTime: 2023-02-02 11:49:07
 * @Description: 
-->
<template>
  <div id="homepage-tab-header">
    <van-icon name="cross" @click="goBack" />
    <span>{{ props.tabHeader }}</span>
  </div>
</template>

<script lang="ts" setup>
import { confirmUseTips } from "@/hook/tipsDialog";
import router from "@/router/index";

type Props = { tabHeader: string };
const props = withDefaults(defineProps<Props>(), {
  tabHeader: "登录",
});

/**
 * @description: 处理返回
 * @return {*}
 */
function goBack() {
  router.back(); //后退
  // if (props.tabHeader != "登录") {
  //   router.push("/inspection-report");
  // }
  // if (props.tabHeader == "检查报告") {
  //   const param = { message: "确定退出登录吗？" };
  //   confirmUseTips(param, () => {
  //     router.push("/login");
  //   });
  // }
}
</script>

<style lang="scss" scoped>
#homepage-tab-header {
  width: 100%;
  height: 45px;
  line-height: 50px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  span {
    margin-left: 34%;
  }
  .van-icon {
    font-size: 20px;
    margin: 0 0 0 8px;
  }
}
</style>
