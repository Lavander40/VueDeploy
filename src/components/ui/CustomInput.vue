<template>
  <input class="input" type="text" :value="value" @input="updateInput">
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event){
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  margin: 10px 0;
  width: available;
  border: 1px #c93c0c solid;
  padding: 5px;
}
</style>