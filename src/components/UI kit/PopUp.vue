<template>
  <div v-if="$store.state.isPopUpShow" @click="closeOutBackground" class="darknessWrapper">
    <div class="popUp" @click.stop>
      <div class="popUp__text">
        <h3>
          <slot></slot>
        </h3>
      </div>
      <div v-if="options.input" class="popUp__input">
        <input v-model="inputValue" autofocus placeholder="Project Name" type="text">
      </div>
      <div class="popUp__btns">
        <button v-if="options.choice" @click="btnClicked('yes')" id="no">No</button>
        <button @click="btnClicked('ok')" id="yes">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowPopUp: true,
      inputValue: '',
    };
  },
  props: {
    options: {
      type: Object,
      default: {input: false, choice: true}
    }
    //     [
    //   input: Boolean
    //
    // ]
  },
  methods: {
    closeOutBackground(e) {
      if(this.options.choice){
        this.$store.commit('setPopUpShow',false)
      }
    },
    btnClicked(answer){
      this.$emit('popUpAnswer', answer, this.inputValue)
      this.$store.commit('setPopUpShow',false)
      this.inputValue = ''
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
    gap: 100px;

    &__text {
      h3 {
        font-size: 40px;
        text-align: center;
      }

    }

    &__input {
      width: 70%;
      height: 55px;

      input {
        background: transparent;
        width: 100%;
        height: 100%;
        font-weight: 300;
        font-size: 25px;
        color: white;
        border: 1px solid rgba(128, 128, 128, 0.30);
        outline: none;
        padding: 20px 10px;
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
