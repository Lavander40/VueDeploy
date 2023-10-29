<template>
  <div class="list" v-show="posts.length">
    <h3>Posts Listing</h3>
    <transition-group name="post-list">
      <post-item v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)"/>
    </transition-group>
  </div>
  <div class="list" v-show="!posts.length">
    <h3>No posts found</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components:{
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
  emits: ['remove']
}
</script>

<style scoped>
.list{
  margin-top: 20px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move{
  transition: transform 0.3s ease;
}
</style>