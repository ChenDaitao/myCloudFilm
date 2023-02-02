<template>
  <van-form>
    <van-field
      class="border-top"
      v-model="userPhone.phone"
      placeholder="请输入手机号"
    />

    <van-field
      class="border-bottom"
      v-model="userPhone.messageCode"
      placeholder="请输入短信验证码"
    >
      <template #button>
        <van-button
          v-if="isStop"
          size="small"
          round
          type="primary"
          class="send-code-button"
          @click="sendMsgCode()"
        >
          获取验证码
        </van-button>
        <van-button
          v-else
          size="small"
          round
          type="primary"
          class="send-code-button"
        >
          重新获取 {{ timeCount }}s
        </van-button>
      </template>
    </van-field>
  </van-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { showToast } from "vant";
import { countingDown } from "@/hook/countingDown";
import type { UserPhone } from "./type";

export type GetMsgCodeExpose = {
  userPhone: UserPhone;
};

const { timeCount, isStop, start } = countingDown(); //mixin引入计时hook

const userPhone = reactive<UserPhone>({
  phone: "",
  messageCode: "",
});

/**
 * @description: 点击发送验证码 TODO:
 * @return {*}
 */
function sendMsgCode() {
  const { phone } = userPhone;
  if (phone.length == 0) {
    showToast("请输入正确手机号！");
  } else {
    start();
    console.log("带着手机号去请求验证码了");
  }
}

/**
 * @description: 需要内部暴露属性及类型（定义类型解决TS识别报错） 外部通过ref或parent才能获取
 */
defineExpose({
  userPhone,
});
</script>

<style lang="scss">
.send-code-van-field {
  border-radius: 12px;
  margin: 10px 0;
}
.send-code-button {
  width: 90px;
  height: 30px;
}
</style>
