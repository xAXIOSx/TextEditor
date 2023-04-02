<template>
  <div class="custom-wrapper" :class="{ show: showCustom }">
    <button @click="showCustom = false" type="button">
      <svg
        width="200px"
        height="200px"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="rgb(120, 123, 139)"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(2 2)"
        >
          <circle cx="8.5" cy="8.5" r="8" />
          <g transform="matrix(0 1 -1 0 17 0)" stroke="rgb(120, 123, 139)">
            <path d="m5.5 11.5 6-6" />
            <path d="m5.5 5.5 6 6" />
          </g>
        </g>
      </svg>
    </button>
    <div class="colorPicker">
      <color-picker
        variant="persistent"
        v-bind="color"
        @input="onInput"
      ></color-picker>
      <div class="colorPicker__option">
        <span>Saturation</span>
        <slider
          v-model="saturation"
          width="200px"
          alwaysShowHandle="true"
          handleScale="0"
          height="10"
          color="blue"
          track-color="rgba(28, 40, 62, 0.2)"
        />
        <span>{{ saturation }}</span>
        <span>%</span>
      </div>
      <div class="colorPicker__option">
        <span>Lightness</span>
        <slider
          v-model="lightness"
          width="200px"
          alwaysShowHandle="true"
          handleScale="0"
          height="10"
          color="blue"
          track-color="rgba(28, 40, 62, 0.2)"
        />
        <span>{{ lightness }}</span>
        <span>%</span>
      </div>
      <button id="setColor-btn" type="button" @click="setCustomColor">
        Set Color
      </button>
    </div>
  </div>
</template>

<script>
import ColorPicker from "@radial-color-picker/vue-color-picker";
import slider from "vue3-slider";
import { reactive } from "vue";

export default {
  data() {
    return {
      showCustom: false,
      saturation: 100,
      lightness: 50,
    };
  },
  methods: {
    showWrapper() {
      window.scrollTo(0, 0);
      this.showCustom = true;
    },
    setCustomColor() {
      let newColor = `hsl(${this.color.hue},${this.saturation}%,${this.lightness}%)`;
      // this.setStyles(`color: ${newColor}`);
      this.$emit("newCustomColor", newColor);
    },
  },
  components: {
    ColorPicker,
    slider,
  },
  setup() {
    console.warn = function() {};

    const color = reactive({
      hue: 50,
      saturation: 100,
      luminosity: 50,
      alpha: 1,
    });

    return {
      color,
      onInput: (hue) => {
        color.hue = hue;
      },
    };
  },
};
</script>
