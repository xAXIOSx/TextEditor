<template>
  <div v-if="isShowPopUp" @click="closeOutBackground" class="darknessWrapper">
    <div class="popUp">
      <div class="popUp__text">
        <h3>{{ text }}</h3>
      </div>
      <div class="popUp__btns">
        <button @click="btnCancel" id="no">No</button>
        <button @click="btnConfirm" id="yes">Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowPopUp: false,
    };
  },
  props: {
    text: String,
  },
  methods: {
    btnCancel() {
        this.closePopUp()
    },
    btnConfirm(){
        this.closePopUp()
    },
    showPopUp(){
        this.isShowPopUp = true
    },
    closePopUp(){
        this.isShowPopUp = false
    },
    closeOutBackground(e){
        // Не работает!!!
        e.srcElement.className == "darknessWrapper" || e.srcElement.localName != "button" ? this.closePopUp() : this.showPopUp()
    }
  },
};
</script>

<style lang="scss">
.darknessWrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.541);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  .popUp {
    background: rgba(28, 40, 62, 0.487);
    width: 730px;
    height: 420px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 130px;
    &__text {
      h3 {
        font-size: 40px;
        text-align: center;
      }
    }
    &__btns {
      display: flex;
      gap: 30px;
      button {
        color: white;
        font-size: 25px;
        width: 200px;
        height: 50px;
        border-radius: 30px;
        background: tomato;
        &#yes {
          background: rgb(0, 157, 255);
        }
      }
    }
  }
}
</style>
