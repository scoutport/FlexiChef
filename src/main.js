import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

require("bootstrap/dist/css/bootstrap.min.css");
require("./assets/css/style.scss");
require("bootstrap/dist/js/bootstrap.min");

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
