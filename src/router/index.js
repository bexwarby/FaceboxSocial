import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Connexion from "../views/Connexion.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
