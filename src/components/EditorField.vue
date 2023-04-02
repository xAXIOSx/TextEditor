<template>
  <div
    name="textField"
    class="textField"
    contenteditable
    :style="styles"
    autofocus
    ref="input"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      styles: {},
      antiStylesList: {
        "font-weight": "400",
        "text-decoration": "none",
        "font-style": "normal",
        "font-family": "Roboto",
        "font-size": "32px",
      },
      sel: "",
      spanStyle: "",
    };
  },
  methods: {
    updateStyles(newStyles) {
      this.styles = newStyles;
    },
    setStyles(style) {
      this.sel = window.getSelection();
      let range = this.sel.getRangeAt(0);
      let parentInput = this.$refs.input;

      // This is a special word for the style that comes with the "reset" button

      if (style == "reset") {
        parentInput.innerHTML = this.replacement(
          parentInput.innerHTML,
          "reset"
        );

      // Check for style if it is "text-align"

      } else if (/text-align/.test(style)) {
        let parentDiv = this.sel.focusNode.parentElement;
        if (parentDiv.className == "textField") {
          parentDiv = document.createElement("div");

          // !!! Первая строка если на ней уже применены стили не будет менять позицию
          // !!! Если первую строку подвигать влево вправо а потом применить стили, то она уже будет позиционироваться
          // !!! Проблемы видимо только с первой строкой

          let content = this.sel.focusNode.parentElement.childNodes;
          let spansAndText = [];
          console.log(content);
          content.forEach((node) => {
            if (node.nodeName == "SPAN") {
              spansAndText.push(node.outerHTML);
              node.remove();
            } else if (node.nodeName == "#text") {
              spansAndText.push(node.textContent);
              node.remove();
            }
          });
          let html = spansAndText.join("");
          console.log(html);
          parentDiv.innerHTML = html;
          parentInput.prepend(parentDiv);
        }
        while (parentDiv.tagName !== "DIV") {
          parentDiv = parentDiv.parentElement;
        }
        if (parentDiv.className !== "textField") {
          parentDiv.style = style;
        }
      } else {
        let contents = this.sel.getRangeAt(0).cloneContents();
        let div = document.createElement("div");
        div.appendChild(contents);
        let htmlContent = div.innerHTML;

        let span = document.createElement("span");

        let textRange = this.replacement(htmlContent, style);

        span.style = this.spanStyle;
        span.appendChild(range.extractContents());
        range.insertNode(span);
        
        span.innerHTML = textRange;
      }
    },

    // Function that cleans html from unnecessary tags with regular expressions

    replacement(html, style) {
      // !!! Эта строка будет мешать  text-align
      let newText = html.replace(/<div>/g, "<br>");

      let nameStyle = style.split(":")[0];
      let propertyStyle = style.split(":")[1];

      let regex = new RegExp(`<span style="([^"]*\\b${nameStyle}\\s*:\\s*[^"]*")>`,"g");
      let regexRepeatTest = new RegExp(`style="([^"]*\\b${nameStyle}\\s*:\\s*[^"]*${propertyStyle};")`,"g");

      if (
        regexRepeatTest.test(html) ||
        (this.sel.focusNode.parentElement.getAttribute("style") ==
          `${nameStyle}:${propertyStyle};` &&
          nameStyle !== "color")
      ) {
        nameStyle == "text-decoration"
          ? (this.spanStyle = "display:inline-block")
          : (this.spanStyle = `${nameStyle}: ${this.antiStylesList[nameStyle]}`);
        newText = newText.replace(regex, ``);
      } else if (
        /style="([^"]*\bdisplay\s*:\s*[^"]*inline-block;")/.test(html)
      ) {
        nameStyle = "display";
        regex = new RegExp(`<span style="([^"]*\\b${nameStyle}\\s*:\\s*[^"]*")>`,"g");
        newText = newText.replace(regex, "");
        this.spanStyle = style;
      } else {
        newText = newText.replace(regex, "");
        this.spanStyle = style;
      }
      if (style == "reset") {
        newText = newText.replace(/<(?!br)[^>]*>/g, "");
      }

      newText = newText.replace(/^<br>/, "");
      return newText;
    },
  },
  mounted() {
    this.$refs.input.addEventListener("mouseup", (event) => {
      let selectedText = window.getSelection().toString();
      if (selectedText) {
        this.$emit("textHighlighted", event);
      }
    });
  },
};
</script>
