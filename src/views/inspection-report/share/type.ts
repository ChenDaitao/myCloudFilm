/*
 * @Date: 2023-02-02 09:23:53
 * @LastEditTime: 2023-02-02 21:19:19
 * @Description:
 */
export interface ShareContent {
  shareType: string; //1 pc分享 2二维码分享
  timeLimit: string;
  needPwd: boolean;
  hasHistory: boolean;
}
