import { showConfirmDialog } from "vant";

type Params = {
  title?: string;
  message: string;
};
/**
 * @description: 处理通用弹窗确定提示
 * @param {Params} params
 * @param {Function} callback
 * @return {*}
 */
export const confirmUseTips = (params: Params, callback: Function) => {
  showConfirmDialog({
    title: params.title,
    message: params.message,
  })
    .then(() => {
      // on confirm
      callback();
      console.log("delete");
    })
    .catch(() => {
      // on cancel
    });
};
