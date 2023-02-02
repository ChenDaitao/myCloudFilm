/*
 * @Date: 2023-01-31 18:12:48
 * @LastEditTime: 2023-02-01 16:05:12
 * @Description:
 */

/* Inspection 类型 */
export type Inspection = {
  isShare: boolean;
  isDownload: boolean;
};
/* User 类型 */
type UserInfo = {
  username: string;
  userPhone: string;
};
export type User = {
  userInfo: UserInfo;
};
