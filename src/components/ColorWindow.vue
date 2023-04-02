<template>
  <div class="colorPopUps">
    <CustomWrapper ref="customWrapper" @newCustomColor="emitColor"/>

    <div class="color-window" :class="{ show: showWindow }" ref="popUp">
      <button
        v-for="n in 7"
        :key="n"
        type="button"
        class="color-btn"
        @click="setColor"
      ></button>
      <button type="button" @click="showWrapper">Custom</button>
    </div>
  </div>
</template>

<script>
import CustomWrapper from "../components/CustomWrapper.vue";

export default {
  data() {
    return {
      showWindow: false,
    };
  },
  methods: {
    textHighlighted(event) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
      setTimeout((e) => {
        this.showWindow = true;
        this.$refs.popUp.style.top = `${this.cursorY - 160}px`;
        this.$refs.popUp.style.left = `${this.cursorX - 125}px`;
      }, 100);
    },
    unvisibleWindow(event) {
      if (this.showWindow == true) {
        this.showWindow = false;
      }
    },
    showWrapper() {
      this.$refs.customWrapper.showWrapper();
    },
    setColor(e) {
      let newColor = e.srcElement.getAttribute('color');
      // this.setStyles(`color: ${newColor}`);
      this.emitColor(newColor)
    },
    emitColor(color){
      this.$emit("newColor", color);
    }
  },
  components: {
    CustomWrapper,
  },
};
</script>
