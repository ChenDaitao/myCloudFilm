<!--
 * @Date: 2023-02-02 11:43:55
 * @LastEditTime: 2023-02-02 14:38:53
 * @Description:  
-->
<template>
  <div class="main-content-views" id="binding-phone">
    <GetMsgCode ref="getMsgCodeRef" />
    <van-button
      class="next-button"
      type="primary"
      round
      @click="confirmBinding"
    >
      确定
    </van-button>
    <div class="problem-info" @click="showWidthProblem = true">遇到问题？</div>
  </div>

  <!-- 遇见问题 popup -->
  <van-dialog
    v-model:show="showWidthProblem"
    title="收不到短信？"
    show-cancel-button
    confirmButtonColor="#1286ff"
  >
    <ProblemTip />
  </van-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { GetMsgCodeExpose as GetMsgCodeRef } from "@/components/getMsgCode/index.vue";
import GetMsgCode from "@/components/getMsgCode/index.vue";
import ProblemTip from "@/components/readParticle/ProblemTip/index.vue";

const showWidthProblem = ref<boolean>(false); //遇见问题弹窗显示
const getMsgCodeRef = ref<GetMsgCodeRef | null>(null); //处理组件ref

/**
 * @description: 确定绑定时
 * @return {*}
 */
function confirmBinding() {
  console.log(getMsgCodeRef.value?.userPhone, "ref");
}
</script>

<style lang="scss" scoped>
#binding-phone {
  margin-top: 10px;
}
</style>
