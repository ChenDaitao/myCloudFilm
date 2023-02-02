<!--
 * @Date: 2022-11-29 16:19:52
 * @LastEditTime: 2023-02-02 22:51:18
 * @Description: 个人中心
-->
<template>
  <section
    id="personal-center"
    class="main-content-views"
    :style="`height:${mainHeight}px`"
  >
    <header>
      <!-- <img class="avatar" :src="userAvatar" alt="" /> -->
      <img class="avatar" src="@/assets/images/avator.jpg" alt="" />
      <div class="user-info-description">
        <span class="user-name">
          <i class="iconfont bianjijian edit-user-name">
            {{ userInfo.username }}
          </i>
          <van-icon name="records" @click="editUserName" />
        </span>
        <span class="user-tel">{{ userStore.secretPhone }}</span>
      </div>

      <!-- userinfo detail -link -->
      <router-link
        to="/personal-center/user-information"
        custom
        v-slot="{ navigate }"
      >
        <i class="iconfont user-info-detail" @click="navigate"></i>
      </router-link>
    </header>

    <main>
      <div
        class="personal-info"
        v-for="personalItem in menuList"
        :key="personalItem.label"
      >
        <!-- @click="navigate" 导航跳转 -->
        <router-link :to="personalItem.navigate" custom v-slot="{ navigate }">
          <div @click="navigate">
            <span class="icon-set">
              <van-icon :name="personalItem.icon" />
              {{ personalItem.label }}</span
            >
            <van-icon name="arrow" />
          </div>
        </router-link>
      </div>
    </main>
    <footer class="techtips-set"><TechSustain /></footer>
  </section>

  <!-- 编辑姓名弹窗 -->
  <van-dialog
    v-model:show="showEditName"
    title="修改姓名"
    show-cancel-button
    @confirm="saveEdit"
  >
    <van-field class="edit-field" v-model="editName" placeholder="点击输入" />
  </van-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { showToast } from "vant";
import userStore from "@/stores/modules/user";
import TechSustain from "@/components/footer/TechSustain.vue";
import type { PersonalInfo } from "./typing";

const { userInfo } = storeToRefs(userStore);
const userAvatar = ref("");
const menuList: PersonalInfo[] = [
  {
    icon: "manager-o",
    label: "成员管理",
    navigate: "/personal-center/member-management",
  },
  {
    icon: "question-o",
    label: "常见问题",
    navigate: "/personal-center/common-problems",
  },
  {
    icon: "description",
    label: "操作指南",
    navigate: "/personal-center/member-management",
  },
  {
    icon: "friends-o",
    label: "关于我们",
    navigate: "/personal-center/about-us",
  },
  {
    icon: "setting-o",
    label: "设置",
    navigate: "/personal-center/setting-management",
  },
];
const showEditName = ref<boolean>(false); //弹窗显示
const editName = ref<string>(""); //修改姓名

/**
 * @description: 编辑姓名弹窗
 * @return {*}
 */
function editUserName() {
  showEditName.value = true;
}

/**
 * @description: 保存修改
 * @return {*}
 */
function saveEdit() {
  if (editName.value) {
    userInfo.value.username = editName.value;
    editName.value = "";
  } else {
    showEditName.value = false;
    showToast("请输入修改姓名！");
  }
}

const mainHeight = ref<number>(0); //处理内容自适应宽高
onMounted(() => {
  const height = window.innerHeight;
  mainHeight.value = height - 100;
  console.log(mainHeight.value, "gaou");
});
</script>

<style lang="scss" scoped>
@use "@/assets/css/var/var.scss" as mainVar;
@import "@/assets/css/mixin/index.scss";

@mixin operation-list {
  background: mainVar.$use-content-bgc;
  border-radius: 10px;
}
#personal-center {
  margin-top: 10px;
  // @include homepage-background;
  position: relative;
  header {
    display: flex;
    position: relative;
    align-items: center;
    img {
      height: mainVar.$avatar-size;
    }
    .user-info-description {
      color: #333;
      height: mainVar.$avatar-size;
      margin-left: 10px;
      display: inline-flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 20px;
      .edit-user-name {
        font-weight: 600;
        font-size: 16px;
        margin-right: 5px;
        cursor: pointer;
      }
      .user-tel {
        font-size: 14px;
      }
    }
    .user-info-detail {
      font-size: 22px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, 50%);
    }
  }
  main {
    margin-top: 36px;
    margin-bottom: 30%; //TODO:处理说明显示自适应靠下
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    .personal-info {
      @include operation-list;
      > div {
        @include main-content;
        height: 52px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-set {
          display: inline-flex;
          align-items: center;
          .van-icon {
            font-size: 20px;
            font-weight: 500;
            margin-right: 8px;
          }
        }
      }
    }
  }
}

.edit-field {
  width: 160px;
  line-height: 0px;
  margin: 20px auto;
  border: 1px solid #ccc;
}
</style>
