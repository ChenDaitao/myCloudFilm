/*
 * @Date: 2023-01-30 10:02:41
 * @LastEditTime: 2023-01-31 17:59:47
 * @Description:
 */
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/css/index.scss";
import "vant/lib/index.css";
import vantRegester from "@/utils/vant-install";
import { store } from "@/stores/index";
const app = createApp(App);
vantRegester(app); //注册vant组件

app.use(store).use(router);

app.mount("#app");
