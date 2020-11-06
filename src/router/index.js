import { createRouter, createWebHashHistory } from "vue-router";
import Recipes from "../views/Recipes.vue";

const routes = [
  {
    path: "/",
    name: "Recepten",
    icon: "fas fa-book-open",
    component: Recipes
  },
  {
    path: "/ingredients",
    name: "Ingrediënten",
    icon: "fas fa-th-list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Ingredients.vue")
  },
  {
    path: "/data",
    name: "Importeren/Exporteren",
    icon: "fas fa-database",
    component: () => import("../views/DataManagement.vue")
  },
  {
    path: "/recipe/:id",
    hideInMenu: true,
    component: () => import("../views/NewRecipe.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
