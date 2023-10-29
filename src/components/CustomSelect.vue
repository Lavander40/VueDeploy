<template>
  <select :value="value" @change="changeOption">
    <option disabled value="">Choose from</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event){
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
select{
  background: transparent;
  color: #c93c0c;
  border: 1px solid #c93c0c;
  padding: 5px;
}
</style>