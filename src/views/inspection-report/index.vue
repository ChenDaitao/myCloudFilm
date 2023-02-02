<!--
 * @Date: 2023-01-30 15:25:24
 * @LastEditTime: 2023-02-01 21:34:37
 * @Description: 检查报告
-->

<template>
  <section id="check-report" class="main-content-views">
    <header>
      <div class="user-info">
        <img src="@/assets/images/avator.jpg" />
        <i>{{ userInfo }}</i>
      </div>

      <div class="function-button" v-if="isPerson">
        <van-button
          round
          type="primary"
          size="small"
          icon-position="right"
          icon="arrow"
          @click="userSwitch = true"
        >
          切换成员
        </van-button>
      </div>

      <div class="function-button" v-if="!isPerson">
        <van-button
          round
          size="small"
          type="primary"
          icon-position="right"
          icon="arrow"
          @click="puchNextPage('RECORD')"
        >
          检查记录
        </van-button>
      </div>
    </header>
    <main><MainReportVue /></main>
    <footer class="techtips-set"><TechSustain /></footer>
  </section>

  <!-- 切换成员 popup -->
  <van-popup
    v-model:show="userSwitch"
    position="right"
    :style="{ width: '70%', height: '100%' }"
  >
    <section class="all-members main-content-views">
      <p>请选择已绑定的成员</p>
      <div
        class="menmber-item"
        v-for="(personItem, index) in personList"
        :key="index"
      >
        <img src="@/assets/images/avator.jpg" alt="" />
        <span>{{ personItem.name }}</span>
      </div>
      <van-button type="primary" round @click="puchNextPage('ADD')"
        >添加成员</van-button
      >
    </section>
  </van-popup>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect, watch, onMounted } from "vue";
import MainReportVue from "@/views/inspection-report/component/MainReport.vue";
import TechSustain from "@/components/footer/TechSustain.vue";
import router from "@/router";

let isPerson = ref<boolean>(true); //是否验证码登录 显示切换成员
const userSwitch = ref<boolean>(false); //侧边弹窗
type Person = {
  name: string;
};
const personList = reactive<Person[]>([
  {
    name: "大西瓜",
  },
  {
    name: "新人礼子",
  },
]);

/**
 * @description: 处理页面路由跳转
 * @param {*} type ADD--添加成员 RECORD--检查记录
 * @return {*}
 */
function puchNextPage(type: string) {
  if (type == "ADD") {
    router.push("/personal-center/add-member");
  } else router.push("/personal-center/add-member");
}

onMounted(() => {
  isPerson.value = Boolean(window.sessionStorage.getItem("isPerson"));
});
const userInfo = "李子西瓜";
//首次进入立即监听并执行一次
watchEffect(() => {});
//依赖值改变 执行函数
watch(
  () => "",
  () => {}
);
</script>

<style lang="scss" scoped>
#check-report {
  margin-top: 10px;
  overflow-y: auto;
  header {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
      width: 180px;
      img {
        width: 70px;
        height: 70px;
        margin-right: 10px;
      }
      i {
        font-size: 10px;
        font-weight: 700;
      }
    }
    .function-button {
      .van-button {
        width: 105px;
      }
    }
  }
  main {
    margin: 20px 0 10% 0;
  }
  footer {
    margin-bottom: 10px;
  }
}
.all-members {
  position: relative;
  height: 100%;
  font-size: 14px;
  .menmber-item {
    height: 80px;
    width: 230px;
    line-height: 80px;
    font-size: 16px;
    font-weight: 700;
    img {
      margin-right: 6px;
      height: 60px;
      border-radius: 50%;
      border: 1px solid green;
    }
  }
  .van-button {
    position: absolute;
    bottom: 15px;
    width: 88%;
  }
}
</style>
