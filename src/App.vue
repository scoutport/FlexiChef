<template>
  <header
    class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
  >
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">FlexiChef</a>
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Recepten</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ingredients" class="nav-link">Ingrediënten</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/data" class="nav-link">Importeren/Exporteren</router-link>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div class="container">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import * as moment from "moment";

export default {
  name: "MainWindow",
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    routes() {
      let routes = [];

      this.$router.options.routes.forEach(route => {
        if (!route.hideInMenu) routes.push(route);
      });

      return routes;
    },
    date() {
      return moment().year();
    }
  }
};
</script>
