<template>
  <div class="post">
    <div>
      <div><strong>{{ post.id }}. Название:</strong> {{ post.title }}</div>
      <br>
      <div><strong>Содержание:</strong> {{ post.body }}</div>
      <br>
    </div>
    <div class="post_btn">
      <custom-btn @click="$router.push(`/posts/${ post.id }`)">Open</custom-btn>
      <custom-btn @click="$emit('remove', post)">Delete</custom-btn>
    </div>
  </div>
</template>

<script>
import CustomBtn from "@/components/ui/CustomBtn";
export default {
  name: "PostItem",
  components: {CustomBtn},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #a54f2a;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post_btn{
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
}
</style>