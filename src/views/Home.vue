<template>
  <SaveList></SaveList>
</template>

<script>
import SaveList from "@/components/home-components/SaveList";
export default {
  components: {SaveList},

  data(){
    return {

    }
  },
  methods:{
    newProject(){
      this.$router.push('/editor')
    }
  }
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
