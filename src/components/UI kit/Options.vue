<template>
  <select :id="option.name" @input="setOption">
    <option disabled value="">Please select {{ option.name }}</option>
    <option v-for="param in option.params">{{ param }}</option>
  </select>
</template>

<script>
export default {
  name: "Options",
  props: {
    option: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>