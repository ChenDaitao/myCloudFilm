/*
 * @Date: 2022-11-23 15:35:57
 * @LastEditTime: 2022-11-23 15:47:13
 * @Description: System
 */
import { defineStore } from "pinia";

interface SystemState {
  token: string;
  includList: string[];
  isTFA: boolean;
  userInfo: UserInfoResponse;
}
interface UserInfoResponse {} // api  type
export const useSystemStore = defineStore({
  id: "system",
  state: (): SystemState => ({
    token: "",
    includList: [],
    isTFA: true,
    userInfo: {},
  }),
  getters: {
    cachedViews(): string[] {
      return this.includList;
    },
    hadToken(): boolean {
      return Boolean(this.token);
    },
  },
  actions: {},
});
