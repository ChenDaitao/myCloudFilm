/*
 * @Date: 2023-01-31 17:04:49
 * @LastEditTime: 2023-01-31 17:10:08
 * @Description:
 */
import api from "../index";

/* 用户登录 */
class system {
  login(data: any) {
    return api.post("/login", data);
  }
}
