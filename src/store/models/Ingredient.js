import { Model } from "@vuex-orm/core";

export default class Ingredient extends Model {
  static entity = "ingredients";

  static fields() {
    return {
      id: this.uid(),
      name: this.string(""),
      unit: this.string(""),
      neededPerPerson: this.number(""),
      contentPerPackage: this.number(""),
      pricePerPackage: this.number(""),
      diets: this.attr("")
    };
  }
}
