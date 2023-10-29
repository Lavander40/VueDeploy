<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomBtn"
}
</script>

<style scoped>
button {
  background: none;
  color: #c93c0c;
  border: 1px solid #c93c0c;
  padding: 5px;
}
</style>