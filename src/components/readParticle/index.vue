<!--
 * @Date: 2023-01-30 14:11:50
 * @LastEditTime: 2023-02-02 10:14:53
 * @Description: 
-->
<template>
  <div class="readme">
    <van-checkbox icon-size="14px"
      >我已经阅读并同意
      <i @click="showUserLicense = true">《云电子胶片使用协议》</i>
    </van-checkbox>
    <span @click="showWidthProblem = true">遇见问题?</span>
  </div>

  <!-- 使用协议主要内容popup NOTE:  -->
  <van-popup
    v-model:show="showUserLicense"
    round
    position="bottom"
    :style="{ height: '60%' }"
  >
    <UseLicense />
  </van-popup>

  <!-- 遇见问题主要内容dialog -->
  <van-dialog
    v-model:show="showWidthProblem"
    title="收不到短信？"
    show-cancel-button
    confirmButtonColor="#1286ff"
  >
    <ProblemTip />
  </van-dialog>
</template>

<script setup lang="ts">
import ProblemTip from "./ProblemTip/index.vue";
import UseLicense from "./useLicense/index.vue";
import { ref } from "vue";

const showUserLicense = ref<boolean>(false);
const showWidthProblem = ref<boolean>(false);
</script>

<style scoped lang="scss">
@use "@/assets/css/var/var.scss" as mainVar;
.readme {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 8px;
  color: mainVar.$color-tips;
  i,
  span {
    color: mainVar.$color-active;
  }
}
</style>
