<template>
  <div class="editorPanel">
    <div class="buttons-group">
      <button type="button" @click="reset" class="reset">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="rgb(120, 123, 139)"
            stroke-width="2"
            d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
          />
        </svg>
      </button>
      <div class="mainButtons-group">
        <div class="editorPanel__buttons">
          <button @click="setBold">
            <svg
              style="fill: rgb(120, 123, 139)"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"
                />
              </g>
            </svg>
          </button>
          <button @click="setItalic">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6H36"
                stroke="rgb(120, 123, 139)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 42H28"
                stroke="rgb(120, 123, 139)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29 5.95239L19 42"
                stroke="rgb(120, 123, 139)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button @click="setUnderline">
            <svg
              width="38px"
              height="38px"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="none" fill-opacity="0.01" />
              <path
                d="M8 44H40"
                stroke="rgb(120, 123, 139)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37 6.09698C37 12.7636 37 15.3333 37 22C37 29.1797 31.1797 35 24 35C16.8203 35 11 29.1797 11 22C11 15.3333 11 12.7636 11 6.09698"
                stroke="rgb(120, 123, 139)"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <div class="editorPanel__buttons">
          <button @click="setJustify('left')">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="480"
                height="32"
                x="16"
                y="63.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="151.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="239.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="327.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="320"
                height="32"
                x="16"
                y="415.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
            </svg>
          </button>
          <button @click="setJustify('center')">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="480"
                height="32"
                x="16"
                y="63.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="151.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="239.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="327.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="320"
                height="32"
                x="96"
                y="415.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
            </svg>
          </button>
          <button @click="setJustify('right')">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="480"
                height="32"
                x="16"
                y="63.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="151.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="239.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="480"
                height="32"
                x="16"
                y="327.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
              <rect
                width="320"
                height="32"
                x="176"
                y="415.998"
                fill="rgb(120, 123, 139)"
                class="ci-primary"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="editorPanel__options">
      <select id="font-family" @input="setOption">
        <option disabled value="">Please select font-family</option>
        <option>Roboto</option>
        <option>Montserrat</option>
        <option>Inter</option>
        <option>Raleway</option>
      </select>

      <select id="font-weight" @input="setOption">
        <option disabled value="">Please select font-weight</option>
        <option>100</option>
        <option>300</option>
        <option>400</option>
        <option>500</option>
        <option>700</option>
        <option>900</option>
      </select>

      <select id="font-size" @input="setOption">
        <option disabled value="">Please select font-weight</option>
        <option>8px</option>
        <option>16px</option>
        <option>32px</option>
        <option>64px</option>
        <option>128px</option>
        <option>256px</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
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
