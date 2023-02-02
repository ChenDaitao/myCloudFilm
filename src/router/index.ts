/*
 * @Date: 2023-01-30 12:26:09
 * @LastEditTime: 2023-02-01 22:57:54
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";
import { INSPECTION_REPORT } from "./inspection-report/index";
import { PERSONAL_CENTER } from "./personal-center/index";
import { SYSTEM } from "./system";
import LAYOUT from "@/layout/layout.vue";

const BasePath = import.meta.env.BASE_URL;
const router = createRouter({
  history: createWebHistory(BasePath), //路由基础路径
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/inspection-report",
      // redirect: "/login",
      component: LAYOUT,
      children: [], //TS类型强制
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        title: "登录",
      },
      component: () => import("@/views/login/index.vue"),
    },
    {
      path: "/inspection-report",
      name: "InspectionReport",
      redirect: "/inspection-report/homepage",
      component: LAYOUT,
      children: INSPECTION_REPORT,
    },
    {
      path: "/personal-center",
      name: "PersonalCenter",
      redirect: "/personal-center/homepage",
      component: LAYOUT,
      children: PERSONAL_CENTER,
    },
    {
      path: "/system",
      name: "System",
      redirect: "/inspection-report/homepage",
      component: LAYOUT,
      children: SYSTEM,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "NotFound",
    //   meta: {
    //     title: "Page not found",
    //   },
    //   component: () => import("@/views/error/not-found.vue"),
    // },
  ],
});

// 利用路由守卫 决定是否进入登录页
// router.beforeEach((to, from, next) => {});
export default router;
