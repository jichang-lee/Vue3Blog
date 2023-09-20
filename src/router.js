import { createWebHistory, createRouter } from "vue-router";
import List from './components/BlogList.vue'
import TextHome from './components/HomeText.vue'
import BlogDetail from './components/BlogDetail.vue'
import BlogAuthor from './components/BlogAuthor.vue'
import BlogCommnet from './components/BlogComment.vue'
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
    children : [
      {
        path: "/author",
        component: BlogAuthor
      },
      {
        path: "/commnet",
        component: BlogCommnet 
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 