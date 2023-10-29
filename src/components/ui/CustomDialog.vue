<template>
  <div v-if="show" class="dialog" @click="close">
    <div class="dialog__window" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "CustomDialog",
  mixins: [
      toggleMixin,
  ],
}
</script>

<style scoped>
.dialog{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
}
.dialog__window{
  margin: auto;
  background: white;
  border-radius: 10px;
  min-height: 50px;
  min-width: 200px;
  padding: 30px;
  text-align: center;
}
</style>