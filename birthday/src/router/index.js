import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import RandomView from "../views/Random.vue";
import PhotoView from "../views/Photo.vue";
import ShoppingMall from "../views/Shop.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/random",
      name: "random",
      component: RandomView,
    },
    {
      path: "/photo",
      name: "photo",
      component: PhotoView,
    },
    {
      path: "/shoppingmall/:name",
      component: ShoppingMall,
    },
  ],
});

export default router;
