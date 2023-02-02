<!--
 * @Date: 2022-11-25 18:23:39
 * @LastEditTime: 2023-02-02 22:21:34
 * @Description: 主内容页
-->
<template>
  <div id="inspection-report">
    <!-- 若无报告内容则显示此组件  TODO: 调取数据接口 -->
    <WithoutContent v-if="isContent" />
    <div id="inspection-content" v-else>
      <header>
        <h3>
          <img
            class="hospital-logo"
            src="data:image/png;base64,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"
            alt=""
          />
          <i class="hospital-name">ISACTIONJNHBH</i>
        </h3>
        <h4>诊断报告单</h4>
      </header>
      <main>
        <section class="bottom-cross-line">
          <ReportInfoItem label-text="检查号">{{}}</ReportInfoItem>
          <ReportInfoItem label-text="检查时间">{{}}</ReportInfoItem>
          <ReportInfoItem label-text="检查类型">{{}}</ReportInfoItem>
          <ReportInfoItem label-text="检查来源">{{}}</ReportInfoItem>
          <ReportInfoItem label-text="检查部位">{{}}</ReportInfoItem>
        </section>
        <section class="report-body bottom-cross-line">
          <van-collapse v-model="activeName">
            <van-collapse-item
              title="检查所见"
              name="1examinationFinding"
              icon="circle"
            >
              52899156我就是不不不和公共课和部分吐槽大会你家宝宝好几遍还不够出太阳吧初步考虑jbknk京津冀版本就叫你妈妈
            </van-collapse-item>
            <van-collapse-item
              title="诊断提示"
              name="diagnosticTips"
              icon="circle"
            >
              52899156我就是不不不和公共课和部分吐槽大jin泥浆护壁那你就仅用于借记卡本本分分人工湖没看精华规范不要太多即可糊糊们保护眼睛会你家宝宝好几遍还不够出太阳吧初步考虑jbknk京津冀版本就叫你妈妈
            </van-collapse-item>
          </van-collapse>
        </section>
        <section class="bottom-cross-line">
          <ReportInfoItem labelText="报告医生">{{}}</ReportInfoItem>
          <ReportInfoItem labelText="审核医生">{{}}</ReportInfoItem>
          <ReportInfoItem labelText="报告时间">{{}}</ReportInfoItem>
          <p class="focus-tips">{{}}</p>
        </section>
      </main>
      <footer>
        <section id="function-use">
          <span>
            <div>
              <img
                class="iconfont"
                src="@/assets/images/view-report.svg"
                alt=""
              />
            </div>
            <em>报告单</em></span
          >
          <span>
            <div>
              <img
                class="iconfont"
                src="@/assets/images/viewImage.svg"
                alt=""
              />
            </div>
            <em>查看影像</em></span
          >
          <span>
            <div>
              <img class="iconfont" src="@/assets/images/download.svg" alt="" />
            </div>
            <em>下载影像</em></span
          >
          <span @click="isShare = true">
            <div>
              <img class="iconfont" src="@/assets/images/share.svg" alt="" />
            </div>
            <em>分享</em></span
          >
        </section>
      </footer>
    </div>
  </div>

  <!-- 分享时 popup -->
  <van-popup
    v-model:show="isShare"
    round
    position="bottom"
    style="
       {
        min-height: '60%';
      }
    "
  >
    <ShareSet />
  </van-popup>
</template>

<script setup lang="ts">
// import WithoutContent from "@/views/error/WithoutContent.vue";
// import { storeToRefs } from "pinia";
import inspectionStore from "@/stores/modules/inspection";
import ShareSet from "../share/index.vue";
import ReportInfoItem from "@/components/reportInfoItem/index.vue";
import { ref, onMounted } from "vue";

// let height = ref<number>(550);
const isContent = ref<Boolean>(false);
const activeName = ref(["1examinationFinding", "diagnosticTips"]);
const isShare = ref<boolean>(false); //是否分享
</script>

<style lang="scss" scoped>
#inspection-report {
  background-color: #fff;
  margin: 0 10px;
  border-radius: 10px;
  #inspection-content {
    padding: 20px 0 10px 0;
    header {
      text-align: center;
      h3 {
        font-size: 18px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 4px;
          vertical-align: text-bottom;
        }
      }
      h4 {
        font-size: 14px;
      }
    }
    main {
      margin: 25px 0 10px 0px;
      .report-body {
        margin: 25px 0;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
    }
    footer {
      border-top: 1px solid #ddd;
      padding-top: 10px;
      margin-top: 30px;
      #function-use {
        display: flex;
        justify-content: space-around;
        span {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          div {
            width: 40px;
            height: 40px;
            border: 1px solid #ccc;
            border-radius: 50%;
            line-height: 35px;
            .iconfont {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
  }
}
</style>
