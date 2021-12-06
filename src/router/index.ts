import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import Imprit from "../components/ImPrint.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/impressum", component: Imprit },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
