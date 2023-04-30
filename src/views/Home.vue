<template>
  <PopUp ref="popUp" text="Do you want to save your text?" :input="true" @saveConfirm="saveRecord">Please enter your project name</PopUp>
  <SaveList></SaveList>
</template>

<script>
import SaveList from "@/components/home-components/SaveList";
import PopUp from "@/components/UI kit/PopUp";
export default {
  components: {SaveList, PopUp},

  data(){
    return {
    }
  },
};
</script>

<style lang="scss" scoped>

.save-list {
  user-select: none;
  max-width: 1702px;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  row-gap: 30px;
  flex-wrap: wrap;
  }

</style>
