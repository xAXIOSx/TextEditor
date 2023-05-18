<template>
  <div class="editorPanel">
    <div class="buttons-group">
      <button type="button" @click="reset" class="reset">
        <img src="@/assets/img/reset.svg" alt="reset">
      </button>
      <div class="mainButtons-group">
        <div class="editorPanel__buttons">
          <button @click="setBold">
            <img src="@/assets/img/bold.svg" alt="bold">
          </button>
          <button @click="setItalic">
            <img src="@/assets/img/italic.svg" alt="italic">
          </button>
          <button @click="setUnderline">
            <img src="@/assets/img/underline.svg" alt="underline">
          </button>
        </div>
        <div class="editorPanel__buttons">
          <button @click="setJustify('left')">
            <img src="@/assets/img/justify-icons/left.svg" alt="">
          </button>
          <button @click="setJustify('center')">
            <img src="@/assets/img/justify-icons/center.svg" alt="">
          </button>
          <button @click="setJustify('right')">
            <img src="@/assets/img/justify-icons/right.svg" alt="">
          </button>
        </div>
      </div>
    </div>

    <div class="editorPanel__options">
      <Options @input="setOption" :option="{name:'font-family',params:['Roboto','Montserrat','Inter','Raleway']}"/>
      <Options @input="setOption" :option="{name:'font-weight',params:[100,300,400,500,700,900]}"/>
      <Options @input="setOption" :option="{name:'font-size',params:['8px','16px','32px','64px','128px','256px']}"/>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      styles: {},
      defaultStyles: {
        color: "#e1e1e1",
        fontWeight: "400",
        fontFamily: "Roboto",
        fontSize: "32px",
        textDecoration: "none",
        textAlign: "left",
        fontStyle: "normal",
      },
      defaultColors: [
        "red",
        "orange",
        "yellow",
        "green",
        "aqua",
        "blue",
        "purple",
      ],
    };
  },
  methods: {
    reset() {
      this.styles = { ...this.defaultStyles };
      localStorage.setItem("colorsHistory", JSON.stringify(this.defaultColors));
      this.$emit("updateStyle", this.styles, this.defaultColors);
      this.$emit("setNewStyle", `reset`);
    },

    setColor(color) {
      this.$emit("setNewStyle", `color: ${color}`);
    },
    setBold() {
      this.setGlobalStyles("font-weight", "400", "700");
    },
    setItalic() {
      this.setGlobalStyles("font-style", "normal", "italic");
    },
    setUnderline() {
      this.setGlobalStyles("text-decoration", "none", "underline");
    },

    setJustify(pos) {
      this.$emit("setNewStyle", `text-align: ${pos}`);
    },

    setOption(event) {
      let styleName = event.target.id
      let value = event.target.value
      if (!window.getSelection().toString()) {
        this.styles[styleName] = value
      }else {
        this.$emit("setNewStyle", `${styleName}: ${value}`);
      }
    },

    setGlobalStyles(chosenStyle, firstStyle, secondStyle) {
      if (!window.getSelection().toString()) {
        this.styles[chosenStyle] == firstStyle
          ? (this.styles[chosenStyle] = secondStyle)
          : this.styles[chosenStyle] == secondStyle
          ? (this.styles[chosenStyle] = firstStyle)
          : (this.styles[chosenStyle] = secondStyle);
      }else {
        this.$emit("setNewStyle", `${chosenStyle}: ${secondStyle}`);
      }
    },
  },
  mounted() {
    this.styles = { ...this.defaultStyles };
    this.$emit(
      "updateStyle",
      this.styles,
      JSON.parse(localStorage.getItem("colorsHistory"))
    );
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

.editorPanel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgb(28, 32, 47);
  box-shadow: 1px 9px 14px 2px rgb(28 32 47);
  background-color: rgb(43, 48, 71);

  .buttons-group {
    display: flex;
    justify-content: space-between;
    .mainButtons-group {
      display: flex;
    }
  }

  &__sliders {
    width: 15%;
    display: flex;
    justify-content: space-between;
    .slider {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }

  &__buttons {
    height: 105px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    border-left: 1px solid rgb(28, 32, 47);
    border-right: 1px solid rgb(28, 32, 47);
    button {
      color: white;
      width: 100px;
      height: 100px;
      transition: 0.2s;
      &:hover {
        background: rgb(53, 59, 87);
      }
    }
  }

  &__options {
    width: 40%;
    display: flex;
    gap: 80px;
    justify-content: center;
    * {
      font-size: 20px;
      font-weight: 500;
      width: 120px;
      height: 70px;
      color: rgb(120, 123, 139);
      background: transparent;
      border: none;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background: rgb(53, 59, 87);
      }
    }
  }
  .reset {
    content: "Reset";
    font-size: 27px;
    padding: 5px;
    width: 100px;
    height: 105px;
    text-align: center;
    font-weight: 500;
    transition: 0.2s;
    margin-right: 50px;
    &:hover {
      background: rgb(53, 59, 87);
    }
  }
  @include adaptive(1650px) {
    flex-direction: column;
    &__options {
      width: 100% !important;
      border-top: 1px solid rgb(28, 32, 47);
    }
    .mainButtons-group {
      width: 100%;
      flex-direction: column;
    }
  }

  @include adaptive(600px) {
    &__options {
      gap: 20px !important;
    }
    .reset {
      display: none;
    }
  }
}


</style>
