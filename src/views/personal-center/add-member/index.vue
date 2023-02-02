<!--
 * @Date: 2022-12-02 10:14:59
 * @LastEditTime: 2023-02-02 21:37:00
 * @Description: add/edit member
-->
<template>
  <div id="add-member-info" class="main-content-views">
    <van-form>
      <van-field
        class="border-top"
        v-model="infoForm.relation"
        is-link
        readonly
        name="picker"
        label="关系"
        @click="showPopupPicker('R')"
      />
      <van-field
        v-model="infoForm.gender"
        is-link
        readonly
        name="picker"
        label="性别"
        @click="showPopupPicker('G')"
      />
      <van-field
        class="border-bottom"
        v-model="infoForm.realName"
        required
        label="真实姓名"
        placeholder="请填写真实姓名(必填)"
      />
    </van-form>
    <div class="inputField-reminder">
      <em style="color: red">*</em>
      以下号码类型请至少填写一项，系统会根据您填写的信息进行检查记录的匹配
    </div>
    <van-form class="inputField">
      <van-field
        class="border-top"
        v-model="infoForm.iDNumber"
        label="身份证号"
        placeholder="请填写身份证号"
      />
      <van-field
        class="border-bottom"
        v-model="infoForm.orNumber"
        label="就诊号"
        placeholder="请填写就诊号"
      />
    </van-form>
    <van-button class="save-btn" type="primary" round @click="handleSave"
      >保存</van-button
    >
    <van-button class="cancel-btn" round @click="handleSave(false)"
      >取消</van-button
    >
  </div>

  <!-- popup 动作面板 -->
  <van-popup v-model:show="showPopup" position="bottom">
    <van-picker
      style="height: 35%"
      :columns="columnsPopupShow"
      @confirm="onConfirm"
      @cancel="showPopup = false"
    />
  </van-popup>
</template>

<script setup lang="ts">
import { defaultRelationPopup, defaultGenderPopup } from "@/enums/numeric";
import type { ColumnsPopup, InfoForm, Picker, ConifrmItem } from "./type";
import router from "@/router/index";
import { ref, reactive, toRaw } from "vue";
import { useRoute } from "vue-router";
import { showToast } from "vant";

const infoForm: InfoForm = reactive({
  relation: defaultRelationPopup[0].text,
  gender: defaultGenderPopup[0].text,
  realName: "",
  iDNumber: "",
  orNumber: "",
  personId: "",
});

const columns: ColumnsPopup = {
  relationColumns: defaultRelationPopup,
  genderColumns: defaultGenderPopup,
};

const showPopup = ref<boolean>(false); //控制面板显示
const pickerType = ref<string>("R"); //处理类型面板显示
let columnsPopupShow = reactive<Picker[]>(columns.relationColumns); //处理面板类型显示

const route = useRoute();

/**
 * @description: 是否编辑进入
 * @return {*}
 */
function isEdit() {
  // const { infoItem } = route.params;
  console.log(route.params.addMemberInfo, "infoItem");

  // if (infoItem) {
  // }
}
/**
 * @description:处理不同类型picker选中
 * @param {*} type G--性别  R--关系
 * @return {*}
 */
function showPopupPicker(type: string) {
  pickerType.value = type;
  columnsPopupShow =
    type == "G" ? columns.genderColumns : columns.relationColumns;
  showPopup.value = true;
}

/**
 * @description: 确定面板选中
 * @param {*} selectedIndexes
 * @return {*}
 */
function onConfirm({ selectedIndexes }: ConifrmItem) {
  const { relationColumns, genderColumns } = columns;
  if (pickerType.value == "G")
    infoForm.gender = genderColumns[selectedIndexes[0]].text;
  else infoForm.relation = relationColumns[selectedIndexes[0]].text;
  showPopup.value = false;
  console.log(toRaw(infoForm), "infoForm");
}

/**
 * @description: 处理保存
 * @param {*} isSave false--取消 true--保存
 * @return {*}
 */
function handleSave(isSave: boolean) {
  const { iDNumber, orNumber, realName } = infoForm;
  // 处理保存
  if (isSave) {
    if (realName && (iDNumber || orNumber)) {
      router.push("/inspection-report");
      console.log(infoForm);
    } else showToast("请填写完整信息！");
  } else router.push("/inspection-report");
}

isEdit();
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin/index.scss";
#add-member-info {
  // @include main-content;
  // @include homepage-background;
  // padding-top: 30px;
  margin-top: 10px;

  // .inputField-top {
  //   border-radius: 10px 10px 0 0;
  // }
  // .inputField-bottom {
  //   border-radius: 0px 0px 10px 10px;
  // }
  .inputField-reminder {
    font-size: 12px;
    margin: 20px 0 10px 0;
  }
  .save-btn {
    margin-top: 20px;
    width: 100%;
  }
  .cancel-btn {
    @extend .save-btn;
    margin-top: 8px;
  }
}
</style>
