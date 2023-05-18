<template>
  <div class="editor" @click="hideWindow">
    <PopUp ref="popUp" :options="{choice: false}" @popUpAnswer="saveRecord">Your project is saved</PopUp>
    <ColorWindow ref="colorPopUp" @newColor="setColorHistory" />
<!--    EditorPanel доработать компоненты внутри -->
    <EditorPanel
      ref="editorPanel"
      @updateStyle="submitStyle"
      @setNewStyle="setNewStyles"
    />
<!--    EditorPanel методы сделать читабельными-->
    <EditorField ref="editorField" @text-highlighted="textHighlighted" />
    <button @click="saveProof" class="editor__save">
      <img src="../assets/img/save.svg" alt="">
    </button>
  </div>
</template>

<script>
import {ref} from 'vue'
import { ColorWindow, EditorPanel, EditorField, PopUp } from "../components/editor-components/index.ts"
import dateFunc from '@/modules/dateFunc'

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
      this.$store.commit('setPopUpShow',true)
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
  setup(props){
    let {currentDate} = dateFunc()

    let editorField = ref(null)

    let saveRecord = (answer) => {
      let save = {content: editorField.value.getHTML(), time: currentDate.value}
    }

    return {currentDate, editorField, saveRecord}
  },
  props: ['saveName']
};
</script>


