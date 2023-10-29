<template>
  <form @submit.prevent>
    <h3>Post create</h3>
    <custom-input v-model:value="post.title" placeholder="Title"></custom-input><br>
    <custom-input v-model:value="post.body" placeholder="Body"></custom-input><br>
    <div style="display: flex; justify-content: space-between;">
      <custom-btn @click="addPost">Add post</custom-btn>
      <custom-btn @click="cancel">Cancel</custom-btn>
    </div>
  </form>
</template>

<script>
export default {
  name: "PostCreate",
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    addPost() {
      this.post.id = Date.now() % 1000;
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    },
    cancel(){
      this.$emit('close')
    },
  }
}
</script>

<style scoped>
form{
  /*border: 1px solid #a54f2a;*/
}
</style>