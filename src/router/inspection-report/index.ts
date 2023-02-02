export const INSPECTION_REPORT = [
  {
    path: "homepage",
    name: "InspectionReportHomePage",
    component: () => import("@/views/inspection-report/index.vue"),
    meta: {
      title: "检查报告",
      showTabBar: true,
      keepAlive: true,
    },
  },

  {
    path: "history-record",
    name: "HistoryRecord",
    meta: {
      title: "检查记录",
    },
    component: () =>
      import("@/views/inspection-report/history-record/index.vue"),
  },
  // {
  //   path: "check-record",
  //   name: "Check-Record",
  // },
];
