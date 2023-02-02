<!--
 * @Date: 2023-01-30 12:08:28
 * @LastEditTime: 2023-01-30 17:49:26
 * @Description: 
-->
<template>
  <section id="login" class="main-content-views">
    <header>
      <div class="">
        <img src="@/assets/images/logo.png" alt="" />
        <h3>This is an apple</h3>
      </div>
    </header>
    <main>
      <PhoneTell v-if="loginRef === 'PHO'" />
      <IdentidyCode v-if="loginRef === 'IDC'" />
      <ConsultNumber v-if="loginRef === 'CN'" />
      <ReadParticle class="readme" />
    </main>
    <footer>
      <div class="title">其他登录方式</div>
      <div class="use-switch-login">
        <span
          class="login-PHO"
          @click="loginRef = LoginWay.PHO"
          v-if="loginPHO"
        >
          <div>
            <img class="iconfont" src="@/assets/images/phone.svg" alt="" />
          </div>
          <em>手机号</em>
        </span>
        <span
          class="login-IDC"
          @click="loginRef = LoginWay.IDC"
          v-if="loginIDC"
        >
          <div>
            <img class="iconfont" src="@/assets/images/id-card.svg" alt="" />
          </div>
          <em>身份证</em>
        </span>
        <span class="login-CN" @click="loginRef = LoginWay.CN" v-if="loginCN">
          <div>
            <img class="iconfont" src="@/assets/images/jiuzhen.svg" alt="" />
          </div>
          <em>就诊号</em>
        </span>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import PhoneTell from "./waysToLogin/PhoneTell.vue";
import IdentidyCode from "./waysToLogin/IdentidyCode.vue";
import ConsultNumber from "./waysToLogin/ConsultNumber.vue";
import ReadParticle from "@/components/readParticle/index.vue";
import { LoginWay } from "@/enums/userEnums";
import { ref, computed } from "vue";

const loginRef = ref<string>("PHO");
const loginPHO = computed(() => {
  return loginRef.value !== LoginWay.PHO;
});
const loginIDC = computed(() => {
  return loginRef.value !== LoginWay.IDC;
});
const loginCN = computed(() => {
  return loginRef.value !== LoginWay.CN;
});
</script>

<style lang="scss">
.login-button {
  width: 75%;
  margin-top: 10px;
}
</style>
<style lang="scss" scoped>
@use "@/assets/css/mixin/index.scss" as mainMixin;
@use "@/assets/css/var/var.scss" as mainVar;
#login {
  padding: 20px 30px;
  text-align: center;
  header {
    img {
      max-width: 90%;
      height: 100px;
    }
    h3 {
      font-size: 24px;
      letter-spacing: 1px;
    }
  }
  main {
    margin-top: 20px;
  }
  footer {
    @include mainMixin.with-cross-line(1px, 0 "top");
    position: relative;
    top: 60px;
    .title {
      text-align: center;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 150px;
      color: mainVar.$color-small-tips;
      background-color: mainVar.$use-content-bgc;
    }
    .use-switch-login {
      display: flex;
      justify-content: space-evenly;
      height: 100px;
      > span {
        display: block;
        margin: auto 0; //处理圆圈居中
        width: 52px;
        height: 52px;
        line-height: 50px;
        border: 1px solid #ddd;
        border-radius: 50%;
        .iconfont {
          width: 35px;
          height: 35px;
        }
        // padding: 30px 0 20px;
        // i {
        //   width: 24px;
        //   height: 24px;
        // }
      }
    }
  }
}
</style>
