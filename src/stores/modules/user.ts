/*
 * @Date: 2023-02-01 15:59:11
 * @LastEditTime: 2023-02-01 16:15:17
 * @Description:
 */

import { defineStore } from "pinia";
import type { User } from "./type";
const userStore = defineStore({
  id: "user-store",
  state: (): User => ({
    userInfo: {
      username: "张大锤",
      userPhone: "15025467799",
    }, //用户信息
  }),
  getters: {
    // 手机号脱敏显示
    secretPhone() {
      const { userPhone } = this.userInfo;
      const phone: string = userPhone.replace(
        /^(.{3})(?:\d+)(.{4})$/,
        "$1****$2"
      );
      return phone;
    },
  },
  actions: {},
});

export default userStore();
