import { Model } from "@vuex-orm/core";

export default class RecipeIngredient extends Model {
  static entity = "recipes_ingredients";

  static primaryKey = ["recipe_id", "ingredient_id"];

  static fields() {
    return {
      recipe_id: this.attr(null),
      ingredient_id: this.attr(null)
    };
  }
}
