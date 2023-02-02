/*
 * @Date: 2022-11-10 12:02:26
 * @LastEditTime: 2022-11-10 12:07:50
 * @Description: 注册vant 组件
 */
import type { App } from "vue";
import {
  Field,
  Toast,
  Icon,
  Button,
  Checkbox,
  Dialog,
  Popup,
  Collapse,
  CollapseItem,
  Picker,
  Form,
} from "vant";

const components = [
  Field,
  Toast,
  Icon,
  Button,
  Checkbox,
  Dialog,
  Popup,
  Collapse,
  CollapseItem,
  Picker,
  Form,
];

export default function componentRegister(vueApp: App) {
  components.forEach((item) => void vueApp.use(item));
}
