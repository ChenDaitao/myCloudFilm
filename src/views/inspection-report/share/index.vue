<!--
 * @Date: 2022-11-25 18:21:53
 * @LastEditTime: 2023-02-02 22:45:30
 * @Description: 用户分享 
-->
<template>
  <section id="share-report">
    <div class="share-title">分享</div>
    <div class="share-tips">
      温馨提示：报告和影像包含隐私信息，分享前请确认对方是可信人士
    </div>

    <section class="share-content">
      <van-field
        class="border-top gray-background"
        is-link
        readonly
        name="picker"
        v-model="shareContent.timeLimit"
        @click="showTimePopup = true"
      >
      </van-field>
      <div class="need-pwd">
        <van-checkbox v-model="shareContent.needPwd" shape="square">
          密码保护
        </van-checkbox>
        <span v-if="shareContent.needPwd">{{ randomPwd }}</span>
      </div>
      <van-checkbox v-model="shareContent.hasHistory" shape="square">
        允许对方查看历史检查记录
      </van-checkbox>
    </section>
    <div class="share-button">
      <van-button class="ORcode-button" @click="buttonUse = true">
        二维码分享
      </van-button>
      <van-button class="pc-button" @click="buttonUse = false">
        电脑链接分享
      </van-button>
    </div>

    <section class="share-way">
      <div class="pc-way" v-if="!buttonUse">
        <span>网址： {{ pcUrl }}</span>
        <span v-if="shareContent.needPwd">授权码 {{ randomPwd }}</span>
      </div>
      <div class="QRcode-way" v-if="buttonUse">
        <img src="@/assets/images/avator.jpg" alt="" />
      </div>
    </section>

    <section class="func-button" v-if="!buttonUse">
      <van-button @click="copyPcUrl">复制链接</van-button>
    </section>
  </section>

  <!-- popup 动作面板 -->
  <van-popup v-model:show="showTimePopup" position="bottom">
    <van-picker
      style="height: 35%"
      :columns="defaultShareTimeLimit"
      @confirm="onTimeConfirm"
      @cancel="showTimePopup = false"
    />
  </van-popup>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { ShareContent } from "./type";
import { defaultShareTimeLimit } from "@/enums/numeric";
import type { ConifrmItem } from "@/views/personal-center/add-member/type";
import { showToast } from "vant";

const buttonUse = ref<boolean>(false); //button切换 true false为QRcode
const showTimePopup = ref<boolean>(false); //时间选择显示

const defaultShare = {
  shareType: "1", //1 pc分享 2二维码分享
  timeLimit: defaultShareTimeLimit[0].text,
  needPwd: true,
  hasHistory: false,
};
const shareContent = reactive<ShareContent>(defaultShare); //分享信息
const randomPwd = ref<number>(1234); //随机号码显示
const pcUrl = ref<string>("https://vant-contrib.gitee.io/vant/");

/**
 * @description: 确认时间选中
 * @param {*} selectedIndexes
 * @return {*}
 */
function onTimeConfirm({ selectedIndexes }: ConifrmItem) {
  shareContent.timeLimit = defaultShareTimeLimit[selectedIndexes[0]].text;
  showTimePopup.value = false;
}

/**
 * @description: 处理复制
 * @return {*}
 */
function copyPcUrl() {
  navigator.clipboard
    .writeText(pcUrl.value)
    .then(() => {
      showToast("复制成功");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
</script>

<style lang="scss" scoped>
#share-report {
  padding: 20px 20px 10px 20px;
  background-color: #f4f6fa;
  height: 100%;
  .share-title {
    width: 100%;
    text-align: center;
    font-weight: 600;
  }
  .share-tips {
    padding: 20px 0;
    font-size: 13px;
    color: #1286ff;
  }
  .share-content {
    width: 100%;
    .van-checkbox {
      width: 100%;
      padding: 1px 12px;
      height: 46px;
      background-color: #fff;
    }
    .need-pwd {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .van-checkbox {
        width: 100%;
      }
      span {
        background-color: #fff;
        padding-right: 20px;
        text-align: right;
        line-height: 46px;
        color: #1286ff;
      }
    }
  }
  .share-way {
    margin-top: 20px;
    .pc-way {
      display: flex;
      flex-direction: column;
      margin-left: 3px;
      & :first-child {
        margin-bottom: 6px;
      }
    }
    .QRcode-way {
      text-align: center;
      img {
        height: 200px;
        width: 200px;
      }
    }
  }
  .share-button {
    width: 100%;
    margin-top: 15px;
    .pc-button {
      width: 50%;
      background-color: v-bind('!buttonUse ? "#1989fa": "#fff"');
      border-left: none;
    }
    .ORcode-button {
      width: 50%;
      background-color: v-bind('buttonUse ? "#1989fa": "#fff"');
      border-right: none;
    }
  }

  .func-button {
    margin-top: 15px;
    .van-button {
      width: 100%;
      color: #1286ff;
    }
  }
}
</style>
