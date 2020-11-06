<template>
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
  >
    <h1 class="h2">Recepten</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group mr-2">
        <router-link to="/recipe/new" class="btn btn-outline-primary"
          >Nieuw recept</router-link
        >
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-3" v-for="recipe in recipes" v-bind:key="recipe.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ recipe.name }}</h5>

          <p class="card-text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    recipes() {
      return this.$store.state.recipes;
    }
  },
  methods: {
    removeRecipe(id) {
      this.$store.commit("removeRecipe", id);
    }
  }
};
</script>
