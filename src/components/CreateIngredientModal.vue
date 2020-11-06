<template>
  <transition name="fade">
    <div class="modal-container">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nieuw ingrediënt</h5>
            <button type="button" class="btn-close" v-on:click="close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Naam</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Bijv. rijst, sperziebonen, aardappels"
                  v-model="newIngredientForm.name"
                />
              </div>
              <div class="form-group">
                <label for="unit">Eenheid</label>
                <select
                  class="form-control"
                  id="unit"
                  v-model="newIngredientForm.unit"
                >
                  <option value="gram">Gram</option>
                  <option value="kilogram">Kilogram</option>
                  <option value="centiliter">Centiliter</option>
                  <option value="liter">Liter</option>
                  <option value="stuks">Stuks</option>
                </select>
              </div>
              <div class="form-group">
                <label for="neededPerPerson"
                  >Benodigd per persoon (in {{ newIngredientForm.unit }})</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="neededPerPerson"
                  v-model="newIngredientForm.neededPerPerson"
                />
              </div>
              <div class="form-group">
                <label for="contentPerPackage">
                  Inhoud per verpakking (in {{ newIngredientForm.unit }})
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="contentPerPackage"
                  v-model="newIngredientForm.contentPerPackage"
                />
                <small class="form-text text-muted">
                  Hoeveel {{ newIngredientForm.unit }} zit(ten) er in een
                  verpakking?
                </small>
              </div>
              <div class="form-group">
                <label for="pricePerPackage">
                  Prijs per verpakking (euro's)
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="pricePerPackage"
                  v-model="newIngredientForm.pricePerPackage"
                />
              </div>
              <div class="form-group">
                <label for="diets">
                  Mogelijke diëten (selecteer meerdere met ctrl+klik)
                </label>
                <select
                  multiple
                  class="form-control"
                  id="diets"
                  v-model="newIngredientForm.diets"
                  v-if="diets != null"
                >
                  <option
                    v-for="diet in diets"
                    v-bind:key="diet"
                    v-bind:value="diet"
                    >{{ diet }}</option
                  >
                </select>
                <div v-else class="alert alert-danger">
                  Geen diëten gevonden. Voeg diëten toe!
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-on:click="close">
              Sluit venster
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="addIngredient"
            >
              Ingrediënt toevoegen!
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Ingredient from "@/database/models/Ingredient";

export default {
  name: "CreateIngredientModal",
  data() {
    return {
      newIngredientForm: {
        unit: "gram",
        diets: []
      }
    };
  },
  computed: {
    diets() {
      return this.$store.state.diets;
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    addIngredient() {
      console.log(this.newIngredientForm);

      Ingredient.insert({
        data: {
          id: Ingredient.query().count(),
          name: this.newIngredientForm.name,
          unit: this.newIngredientForm.unit,
          neededPerPerson: this.newIngredientForm.neededPerPerson,
          contentPerPackage: this.newIngredientForm.contentPerPackage,
          pricePerPackage: this.newIngredientForm.pricePerPackage,
          diets: this.newIngredientForm.diets
        }
      });
    }
  }
};
</script>

<style scoped></style>
