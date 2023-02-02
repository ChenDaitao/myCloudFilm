import { defineStore } from "pinia";
import type { Inspection } from "./type";
const inspectionStore = defineStore({
  id: "inspection-store",
  state: (): Inspection => ({
    isShare: false, //是否分享 TODO:
    isDownload: false, //是否下载
  }),
  getters: {},
  actions: {},
});

export default inspectionStore();
