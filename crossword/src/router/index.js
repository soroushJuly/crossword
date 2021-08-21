import Vue from "vue";
import VueRouter from "vue-router";
import User from "@/views/User.vue";
import Admin from "@/views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
