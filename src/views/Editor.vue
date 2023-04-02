<template>
  <div class="editor" @click="hideWindow">
    <PopUp ref="popUp" :text="'Do you want to save your text?'"></PopUp>
    <ColorWindow ref="colorPopUp" @newColor="setColorHistory" />
    <EditorPanel
      ref="editorPanel"
      @updateStyle="submitStyle"
      @setNewStyle="setNewStyles"
    />
    <EditorField ref="editorField" @text-highlighted="textHighlighted" />
    <button @click="saveProof" class="editor__save">
      <img src="../assets/img/save.svg" alt="">
    </button>
  </div>
</template>

<script>
import { ColorWindow, EditorPanel, EditorField, PopUp } from "../components"

export default {
  data() {
    return {
      showCustom: false,
      selectText: "",
      prevText: "",
      nextText: "",
      fontSize: "45",
      cursorX: 0,
      cursorY: 0,
      colors: [],
    };
  },

  methods: {
    changeColor() {
      let buttonsColor = document.querySelectorAll(".color-btn");
      if (this.colors == null) {
        localStorage.setItem(
          "colorsHistory",
          JSON.stringify([
            "red",
            "orange",
            "yellow",
            "green",
            "aqua",
            "blue",
            "purple",
          ])
        );
        this.colors = JSON.parse(localStorage.getItem("colorsHistory"));
      }
      this.colors.forEach((e, i) => {
        buttonsColor[i].style.backgroundColor = e;
        buttonsColor[i].setAttribute("color", e);
      });
    },
    setColorHistory(newColor) {
      if (this.colors.indexOf(newColor) > -1) {
        this.colors.splice(this.colors.indexOf(newColor), 1);
      } else {
        this.colors.pop();
      }

      this.colors.unshift(newColor);

      localStorage.setItem("colorsHistory", JSON.stringify(this.colors));
      this.$refs.editorPanel.setColor(newColor);
      this.changeColor();
    },
    submitStyle(style, colors) {
      this.colors = colors;
      this.changeColor();
      this.$refs.editorField.updateStyles(style);
    },
    setNewStyles(style) {
      this.$refs.editorField.setStyles(style);
    },
    textHighlighted(event) {
      this.$refs.colorPopUp.textHighlighted(event);
    },
    hideWindow(event) {
      this.$refs.colorPopUp.unvisibleWindow(event);
    },

    saveProof(){
      this.$refs.popUp.showPopUp()
    }
  },
  components: {
    ColorWindow,
    EditorPanel,
    EditorField,
    PopUp
  },
  mounted() {
    this.colors = JSON.parse(localStorage.getItem("colorsHistory"));
    this.changeColor();
  },
};
</script>


