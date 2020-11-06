import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import VuexORM from "@vuex-orm/core";
import database from "@/database";

export default createStore({
  state: {
    diets: ["Vegetarisch", "Veganistisch", "Vleeseters", "Glutenvrij"]
  },
  mutations: {
    populateDatabaseFromFile(state, obj) {
      this.state.entities = obj.entities;
    }
  },
  actions: {},
  modules: {},
  plugins: [VuexORM.install(database), createPersistedState()]
});
