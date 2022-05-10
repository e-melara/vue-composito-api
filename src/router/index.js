import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/counter",
    name: "counter-page",
    component: () =>
      import(/* webpackChunkName: "counterView" */ "../views/CounterView.vue"),
  },
  {
    path: "/users",
    name: "users-page",
    component: () =>
      import(/* webpackChunkName: "usersView" */ "../views/Users.vue"),
  },
  {
    path: "/search",
    name: "pokemon-search",
    component: () =>
      import(
        /* webpackChunkName: "search-pokemon-view" */ "../views/SearchPokemon.vue"
      ),
  },
  {
    path: "/pokemon/:id",
    name: "pokemon-view",
    component: () =>
      import(
        /* webpackChunkName: "search-pokemon-view" */ "../views/Pokemon.vue"
      ),
  },
  {
    path: "/thano",
    name: "lista-thano",
    component: () =>
      import(/* webpackChunkName: "lista-thano" */ "../views/TodoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
