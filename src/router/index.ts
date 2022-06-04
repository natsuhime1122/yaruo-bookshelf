import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AdminLayout from "@/layouts/AdminLayout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: AdminLayout,
    children: [
      {
        path: "/",
        name: "top",
        component: () => import("../views/Top.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
