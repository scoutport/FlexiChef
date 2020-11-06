<template>
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
  >
    <h1 class="h2">Databeheer</h1>
  </div>
  <div class="row" style="margin-bottom: 2rem;">
    <div class="col-lg-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Recepten</h5>
          <h6 class="card-subtitle mb-2 text-muted">Lokaal opgeslagen</h6>
          <p class="card-text">
            Je hebt momenteel {{ amountRecipes }} opgeslagen recepten in je
            lokale opslag staan
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Ingrediënten</h5>
          <h6 class="card-subtitle mb-2 text-muted">Lokaal opgeslagen</h6>
          <p class="card-text">
            Je hebt momenteel {{ amountIngredients }} opgeslagen ingrediënten in
            je lokale opslag staan
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <h1 class="h2">Acties</h1>
    <div class="col-lg-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Alle data verwijderen</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Lokale data verwijderen
          </h6>
          <p class="card-text">
            Wanneer je op de onderstaande knop drukt verwijder je al je recepten
            en ingrediënten!
          </p>
          <button class="btn btn-outline-danger" v-on:click="removeAllData">
            Verwijder alle data
          </button>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Alle data exporteren</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Exporteren naar een bestand
          </h6>
          <p class="card-text">
            Wanneer je op de onderstaande knop drukt kan je al je data opslaan
            naar je apparaat
          </p>
          <button class="btn btn-outline-primary" v-on:click="saveStore">
            Data exporteren
          </button>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Data importeren</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Importeren vanuit bestand
          </h6>
          <p class="card-text">
            Wanneer je op de onderstaande knop drukt kan je data laden van je
            apparaat
          </p>
          <label class="btn btn-outline-secondary">
            Data importeren <input type="file" @change="loadFile" hidden />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from "moment";

export default {
  name: "DataManagement",
  computed: {
    amountRecipes() {
      return this.$store.state.recipes.length;
    },
    amountIngredients() {
      return this.$store.state.ingredients.length;
    }
  },
  methods: {
    removeAllData() {
      if (confirm("Weet je het zeker? Je data is niet meer terug te halen.")) {
        this.$store.commit("clearDatabase");
      }
    },
    encode(s) {
      let out = [];
      for (let i = 0; i < s.length; i++) {
        out[i] = s.charCodeAt(i);
      }
      return new Uint8Array(out);
    },
    onFileLoad(event) {
      let text = event.target.result;
      this.$store.commit("populateDatabaseFromFile", JSON.parse(text));
    },
    loadFile(file) {
      let reader = new FileReader();

      reader.onload = this.onFileLoad;

      reader.readAsText(file.target.files[0]);
    },
    saveStore() {
      let data = this.encode(JSON.stringify(this.$store.state, null, 4));

      let blob = new Blob([data], {
        type: "application/octet-stream"
      });

      let url = URL.createObjectURL(blob);
      let link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", moment().format("MM-DD-YYYY") + ".recipes");

      let event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click",
        true,
        true,
        window,
        1,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      link.dispatchEvent(event);
    }
  }
};
</script>

<style scoped></style>
