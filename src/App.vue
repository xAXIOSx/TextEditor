<template>
  <div class="editor-title">
    <router-link to="/" class="back">
      <img src="./assets/img/arrow-left.svg" alt="">
    </router-link>
    <div class="text-part">
      <span>Text<b>Editor</b> <span style="font-weight: 100">V1</span></span>
      <span style="font-size:16px; font-weight:300">simply and quickly</span> 
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style lang="scss">

@import "./scss/main.scss";

</style>
