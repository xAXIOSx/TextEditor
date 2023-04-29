<template>
  <div class="save" :class="{new: typeCheck}">
    <div v-if="typeCheck" class="save__content">
      <img src="@/assets/img/pencil.svg" alt=""/>
    </div>
    <div v-else class="save__content"><span>Hello <span style="color: red">lolaalal</span></span></div>
    <!-- <div class="save__content"><span style="color:blue; font-size:64px">Hello</span> <span style="color:yellow">Lorem ipsum, dolor sit amet <span style="font-size:64px">consectetur</span> adipisicing elit. Consectetur, totam.</span></div> -->
    <div class="save__info">
      <div class="save__groupText">
        <div class="save__groupText-title"><h4>{{ save.title }}</h4></div>
        <div v-if="!typeCheck" class="save__groupText-date"><span>{{ save.date }}</span></div>
      </div>
      <button type="button" class="save__upload">
        <img v-if="typeCheck" src="@/assets/img/plus.svg" alt=""/>
        <img v-else src="@/assets/img/upload.svg" alt=""/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SaveItem",
  data() {
    return {}
  },
  props: {
    save: {
      type: Object
    }
  },
  computed: {
    typeCheck(){
      return this.save.type === "new"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";
.save {
  width: 300px;
  height: 250px;
  border: 1px solid rgba(255, 255, 255, 0.096);
  overflow: hidden;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 10px 3px rgb(40, 81, 168);

    button {
      background: rgb(40, 81, 168);
    }

    .save__content {
      transform: scale(1.2);
    }
  }

  &__content {
    border: 1px solid rgba(255, 255, 255, 0.02);
    width: 100%;
    height: 60%;
    padding: 20px;
    transition: 2s;
  }

  &__info {
    width: 100%;
    height: 40%;
    background: rgba(18, 26, 42, 0.718);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: rgb(0, 81, 255);
      border: none;
      outline: none;
      transition: 0.2s;
      width: 60px;
      height: 47px;
      border-radius: 10px;
    }
  }

  &__groupText {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-date {
      font-weight: 300;
    }
  }

  &.new {

    .save__content {
      @include centerFlex;
    }

    button {
      @include centerFlex;
    }
  }
}

</style>