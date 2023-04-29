<template>
  <div class="save-list">
    <SaveItem v-for="saveElement in saves" :save="saveElement"></SaveItem>
    <!--    <div @click="newProject" class="save new">-->
    <!--      <div class="save__content">-->
    <!--        <img src="@/assets/img/pencil.svg" alt=""/>-->
    <!--      </div>-->
    <!--      <div class="save__info">-->
    <!--        <div class="save__groupText">-->
    <!--          <div class="save__groupText-title"><h4>Create new project</h4></div>-->
    <!--        </div>-->
    <!--        <button type="button" class="save__upload">-->
    <!--          <img src="@/assets/img/plus.svg" alt=""/>-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import SaveItem from "@/components/home-components/SaveItem";

export default {
  name: "SaveList",
  components: {
    SaveItem
  },
  props: {
    saves: {
      type: Array,
      default: [
        {
          id: Date.now(),
          title: "First Project!",
          date: 'Mar 22 2023 20:48'
        },
        {
          title: 'Create new Project',
          type: 'new'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>