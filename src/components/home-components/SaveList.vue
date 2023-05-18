<template>
  <div class="save-list">
    <SaveItem v-for="saveElement in saves" :save="saveElement"></SaveItem>
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