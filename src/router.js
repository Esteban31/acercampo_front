import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login.vue";
import Dashboard from "./pages/Dashboard.vue";
import DetailCart from "./pages/DetailCart.vue";


const routes = [
      { path: "/", component: Login },
      { path: "/app", component: Dashboard },
      { path: "/app/cartDetail", component: DetailCart },
];

const history = createWebHistory();

const router = createRouter({
      history,
      routes,
});

export default router;
