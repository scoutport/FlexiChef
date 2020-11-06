<template>
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
  >
    <h1 class="h2">{{ recipeTitle }}</h1>
  </div>
  <div class="row">
    <div class="col-lg-12">
      <QuillEditor v-model="text"></QuillEditor>
    </div>
  </div>

  <CreateIngredientModal
    v-show="showIngredientModal"
    @close="showIngredientModal = false"
  />
</template>

<script>
import CreateIngredientModal from "@/components/CreateIngredientModal";
import QuillEditor from "@/components/QuillEditor";

export default {
  name: "NewRecipe",
  data() {
    return {
      showIngredientModal: false,
      recipe: {},
      text: ""
    };
  },
  components: {
    CreateIngredientModal,
    QuillEditor
  },
  computed: {
    recipeTitle() {
      if (this.$route.params.id === "new") return "Nieuw recept";
      return this.recipe.name;
    }
  },
  mounted() {
    if (this.$route.params.id !== "new") {
      this.recipe = this.$store.getters.recipe(this.$route.params.id);
    }
  }
};
</script>

<style scoped></style>
