<template>
  <div id="editor"></div>
</template>

<script>
import Quill from "quill";
require("quill/dist/quill.snow.css");

export default {
  name: "QuillEditor",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null
    };
  },
  methods: {
    update() {
      this.$emit(
        "update:modelValue",
        this.editor.getText() ? this.editor.root.innerHTML : ""
      );
    }
  },
  mounted() {
    this.editor = new Quill("#editor", {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }]
        ]
      },
      theme: "snow",
      formats: ["bold", "underline", "header", "italic"]
    });

    this.editor.root.innerHTML = this.value;

    // We will add the update event here
    this.editor.on("text-change", () => this.update());
  }
};
</script>

<style scoped></style>
