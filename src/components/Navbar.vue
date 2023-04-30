<template>
  <div class="editor-title">
    <button v-if="$route.fullPath !== '/'" class="back" @click="backRoute">
      <img src="@/assets/img/arrow-left.svg" alt="">
    </button>
    <div class="text-part">
      <span>Text<b>Editor</b> <span style="font-weight: 100">V1</span></span>
      <span style="font-size:16px; font-weight:300">simply and quickly</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods:{
    backRoute() {
      if (this.$route.fullPath === '/editor'){
        this.$store.commit('setPopUpShow', true)
      }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

.editor-title {
  width: 100%;
  height: 70px;
  font-size: 25px;
  @include centerFlex;
  background: rgba(18, 26, 42, 0.842);
  color: rgb(120, 123, 139);
  font-weight: 400;

  .back {
    position: absolute;
    left: 90px;
    top: 10px;
    color: white;
    font-weight: 900;
    font-size: 50px;
    @include centerFlex;
  }

  .text-part {
    display: flex;
    flex-direction: column;
    gap: 3px;
    @include centerFlex;
  }
}
</style>