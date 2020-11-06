<template>
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
  >
    <h1 class="h2">Ingrediënten</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group mr-2">
        <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          v-on:click="showIngredientModal = true"
        >
          Nieuw <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-12">
      <p>
        Wanneer je hier een van je ingrediënten aanpast wordt deze automatisch
        aangepast in al je recepten.
      </p>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Naam</th>
              <th>Eenheid</th>
              <th>Benodigd p.p</th>
              <th>Inhoud per verpakking</th>
              <th>Kosten</th>
              <th>Diëten</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ingredient in ingredients" v-bind:key="ingredient.id">
              <td>{{ ingredient.name }}</td>
              <td>{{ ingredient.unit }}</td>
              <td>{{ ingredient.neededPerPerson }}</td>
              <td>{{ ingredient.contentPerPackage }}</td>
              <td>{{ ingredient.pricePerPackage }}</td>
              <td>{{ ingredient.diets }}</td>
              <td>
                <a
                  href="javascript:void(0)"
                  v-on:click="removeIngredient(ingredient.id)"
                  ><i class="fa fa-trash"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <CreateIngredientModal
    v-show="showIngredientModal"
    @close="showIngredientModal = false"
  />
</template>

<script>
import CreateIngredientModal from "@/components/CreateIngredientModal";

export default {
  name: "Ingredients",
  data() {
    return {
      showIngredientModal: false
    };
  },
  components: {
    CreateIngredientModal
  },
  computed: {
    ingredients() {
      return this.$store.state.ingredients;
    }
  },
  methods: {
    removeIngredient(id) {
      this.$store.commit("deleteIngredient", id);
    }
  }
};
</script>

<style scoped></style>
