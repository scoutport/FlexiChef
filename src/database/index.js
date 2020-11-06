import { Database } from "@vuex-orm/core";
import Recipe from "./models/Recipe";
import Ingredient from "./models/Ingredient";

const database = new Database();

database.register(Recipe);
database.register(Ingredient);

export default database;
