import { Model } from "@vuex-orm/core";
import Ingredient from "./Ingredient";
import RecipeIngredient from "./RecipeIngredient";

export default class Recipe extends Model {
  static entity = "recipes";

  static fields() {
    return {
      id: this.uid(),
      name: this.string(""),
      ingredients: this.belongsToMany(
        Ingredient,
        RecipeIngredient,
        "recipe_id",
        "ingredient_id"
      )
    };
  }
}
