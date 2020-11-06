import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    diets: ["Vegetarisch", "Veganistisch", "Vleeseters", "Glutenvrij"],
    recipes: [],
    ingredients: []
  },
  mutations: {
    populateDatabaseFromFile(state, obj) {
      this.state.entities = obj.entities;
    },

    /*
    Ingredient mutations
     */
    addIngredient(state, ingredient) {
      if (this.state.ingredients.length) {
        ingredient.id =
          this.state.ingredients[this.state.ingredients.length - 1].id + 1;
      } else {
        ingredient.id = 1;
      }

      this.state.ingredients.push(ingredient);
    },
    deleteIngredient(state, id) {
      for (let i = 0; i < this.state.ingredients.length; i++) {
        if (this.state.ingredients[i].id === id) {
          this.state.ingredients.splice(i,1);
        }
      }
    },

    /*
    Recipe mutations
     */
    addRecipe(state, recipe) {
      if (this.state.recipes.length) {
        recipe.id = this.state.recipes[this.state.recipes.length - 1].id + 1;
      } else {
        recipe.id = 1;
      }
      this.state.recipes.push(recipe);
    },
    deleteRecipe(state, id) {
      for (let i = 0; i < this.state.recipes.length; i++) {
        if (this.state.recipes[i].id === id) {
          this.state.recipes.splice(i, 1);
        }
      }
    }
  },
  getters: {
    ingredient(state, id) {
      this.state.ingredients.forEach(ingredient => {
        if (ingredient.id === id) {
          return ingredient;
        }
      });
    },
    recipe(state, id) {
      this.state.recipes.forEach(recipe => {
        if (recipe.id === id) {
          return recipe;
        }
      });
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
