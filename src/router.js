import { createWebHistory, createRouter } from "vue-router";
import List from './components/BlogList.vue'
import TextHome from './components/HomeText.vue'
import BlogDetail from './components/BlogDetail.vue'
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: TextHome,
  },
  {
    path : "/list/detail/:id",
    component : BlogDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 