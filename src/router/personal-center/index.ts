/*
 * @Date: 2022-11-29 16:21:07
 * @LastEditTime: 2023-02-02 22:50:23
 * @Description:
 */
export const PERSONAL_CENTER = [
  {
    path: "homepage",
    name: "PersonalCenterHompage",
    meta: {
      title: "个人中心",
      showTabBar: true,
    },
    component: () => import("@/views/personal-center/index.vue"),
  },
  {
    path: "member-management",
    name: "MemberManagement",
    meta: {
      title: "成员管理",
    },
    component: () =>
      import("@/views/personal-center/management-member/index.vue"),
  },
  {
    path: "add-member",
    name: "AddMember",
    meta: {
      title: "添加成员",
    },
    component: () => import("@/views/personal-center/add-member/index.vue"),
  },
  {
    path: "common-problems",
    name: "CommonProblems",
    meta: {
      title: "常见问题",
    },
    component: () =>
      import("@/views/personal-center/common-problems/index.vue"),
  },
  // {
  //   path: "user-information",
  //   name: "UserInformation",
  //   meta: {
  //     title: "用户个人信息",
  //   },
  //   component: () => import("@/views/personal-center/user-info/index.vue"),
  // },
  // {
  //   path: "member-management",
  //   name: "MemberManagement",
  //   meta: {
  //     title: "操作指南",
  //   },
  //   // component: () => import(""),
  // },
  {
    path: "setting-management",
    name: "SettingManagement",
    meta: {
      title: "设置",
    },
    component: () => import("@/views/personal-center/setting-use/index.vue"),
  },
];
