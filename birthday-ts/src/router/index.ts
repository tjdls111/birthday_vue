import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import RandomView from "../views/Random.vue";
import PhotoView from "../views/Photo.vue";
import MessageView from "../views/Message.vue";
const router = createRouter({
  history: createWebHistory(""),
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
      path: "/message",
      name: "message",
      component: MessageView,
    },
  ],
});

export default router;
