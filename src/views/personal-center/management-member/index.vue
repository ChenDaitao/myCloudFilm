<!--
 * @Date: 2022-12-02 14:20:13
 * @LastEditTime: 2023-02-01 22:14:52
 * @Description: management-member
-->
<template>
  <div id="management-member" class="main-content-views">
    <div class="set-tips">{{ userStore.secretPhone }} 登记检查的患者</div>
    <section class="exist-member">
      <div
        class="member-item"
        v-for="(infoItem, index) in existMemberList"
        :key="index"
      >
        <span>{{ infoItem.name }}</span>
      </div>
    </section>
    <div class="add-tips">手动添加成员</div>
    <section class="add-member">
      <div
        class="member-item"
        v-for="(infoItem, index) in addMemberList"
        :key="index"
      >
        <span>
          <i class="use-text">
            <em>{{ infoItem.relation }}</em> — {{ infoItem.realName }}
          </i>
          <i class="use-icon">
            <van-icon
              name="edit"
              class="icon-edit"
              @click="setEdit(infoItem)"
            />
            <van-icon
              name="delete-o"
              class="icon-delete"
              @click="setDelete(infoItem)"
            />
          </i>
        </span>
      </div>
    </section>
    <van-button type="primary" round>添加成员</van-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { RouteParamValueRaw } from "vue-router";
import { useRouter } from "vue-router";
import type { Member, addMember } from "./type";
import userStore from "@/stores/modules/user";
import { confirmUseTips } from "@/hook/tipsDialog";
// import router from "@/router";

const existMemberList = reactive<Member[]>([
  {
    name: "西瓜选手",
    phone: "15958642535",
  },
  {
    name: "西瓜选手2",
    phone: "15958642535",
  },
  {
    name: "西瓜选手33",
    phone: "15958642535",
  },
]);
const addMemberList = reactive<addMember[]>([
  {
    relation: "父母",
    gender: "",
    realName: "张大壮",
    iDNumber: "",
    orNumber: "",
    personId: "001",
  },
  {
    relation: "夫妻",
    gender: "",
    realName: "李美丽",
    iDNumber: "",
    orNumber: "",
    personId: "002",
  },
  {
    relation: "夫妻",
    gender: "",
    realName: "李美丽",
    iDNumber: "",
    orNumber: "",
    personId: "002",
  },
  {
    relation: "夫妻",
    gender: "",
    realName: "李美丽",
    iDNumber: "",
    orNumber: "",
    personId: "002",
  },
  {
    relation: "夫妻",
    gender: "",
    realName: "李美丽",
    iDNumber: "",
    orNumber: "",
    personId: "002",
  },
]);
const router = useRouter();
/**
 * @description: 处理编辑
 * @param {*} infoItem
 * @return {*}
 */
function setEdit(infoItem: addMember) {
  console.log(infoItem, "infoItem");
  router.push({
    name: "AddMember",
    params: { addMemberInfo: infoItem as unknown as RouteParamValueRaw },
  });
}

/**
 * @description: 处理删除
 * @param {*} infoItem
 * @return {*}
 */
function setDelete(infoItem: addMember) {
  const { personId } = infoItem;
  const param = { title: "温馨提示", message: "确认删除该成员？" };
  confirmUseTips(param, () => {
    console.log("delete");
  });
}
</script>

<style lang="scss" scoped>
#management-member {
  position: relative;
  font-weight: 600;
  .set-tips {
    font-size: 12px;
    margin: 8px 0;
    font-weight: 500;
  }
  .add-tips {
    @extend .set-tips;
    margin-top: 20px;
  }
  .exist-member {
    background-color: #fff;
    border-radius: 12px;
    .member-item {
      height: 45px;
      line-height: 45px;
      text-indent: 1rem;
      font-size: 13px;
      width: 100%;
      border-bottom: 1px solid rgba(238, 238, 238, 0.3);
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .add-member {
    @extend .exist-member;
    margin-top: 10px;
    overflow-y: auto;
    min-height: 40%;
    max-height: 60%;
    .member-item {
      span {
        display: flex;
        justify-content: space-between;
        .use-icon {
          font-size: 18px;
          .icon-edit {
            // width: 30px;
            color: #72a9f5;
          }
          .icon-delete {
            @extend .icon-edit;
            color: #eb0c10;
            margin-right: 20px;
          }
        }
      }
    }
  }
  .van-button {
    width: 90%;
    position: absolute;
    bottom: 10px;
  }
}
</style>
