<template>
<!--  <div v-if="$store.state.isAuth">-->
    <h2>News page</h2>
<!--    <strong>Likes: {{$store.state.likes}}</strong>-->
    <div class="app_btn">
      <custom-btn @click="showDialog">Create post</custom-btn>
<!--      <custom-btn @click="$store.commit('incrementLikes')">Like</custom-btn>-->
<!--      <custom-btn @click="$store.commit('decrementLikes')">Dislike</custom-btn>-->
      <custom-input :value="searchBy" @update:value="setSearchBy" placeholder="Search..." style="flex-grow: 1;"/>
      <custom-select :value="selectedSort" @update:value="setSelectedSort" :options="sortOptions"/>
    </div>
    <custom-dialog v-model:show="dialogVisibility">
      <post-create @create="addPost" @close="hideDialog"/>
    </custom-dialog>
    <post-list :posts="findInSort" @remove="removePost" v-if="!postLoading"></post-list>
    <strong v-else style="position: center; font-size: 18pt;">Loading...</strong>
    <div v-intersection="fetchPosts"></div>
<!--  </div>-->
<!--  <div v-else>-->
<!--    <custom-dialog :show="!$store.state.isAuth">-->
<!--      <custom-btn @click="$store.commit('authenticate')" style="align-self: center">Authenticate</custom-btn>-->
<!--    </custom-dialog>-->
<!--  </div>-->
</template>
<script>
import PostCreate from "@/components/PostCreate";
import PostList from "@/components/PostList";
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: "App",
  components: { PostList, PostCreate},
  data() {
    return {
      dialogVisibility: false,
    }
  },
  methods: {
    ...mapMutations({
      setCurrentPage: "post/setCurrentPage",
      setSelectedSort: "post/setSelectedSort",
      setSearchBy: "post/setSearchBy",
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      fetchPage: "post/fetchPage",
      filterPost: "post/filterPost",
    }),
    addPost(post) {
      this.posts.push(post);
      this.hideDialog();
    },
    removePost(post) {
      this.filterPost(post.id)
    },
    showDialog(){
      this.dialogVisibility = true;
    },
    hideDialog(){
      this.dialogVisibility = false;
    },
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      postLoading: state => state.post.postLoading,
      selectedSort: state => state.post.selectedSort,
      searchBy: state => state.post.searchBy,
      currentPage: state => state.post.currentPage,
      postLimit: state => state.post.postLimit,
      pagesTotal: state => state.post.pagesTotal,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortPosts: "post/sortPosts",
      findInSort: "post/findInSort",
    }),
  },
  watch: {

  },
  mounted(){
    this.fetchPosts();
  }
}
</script>

<style>
.app_btn{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  grid-gap:20px;
  margin: 15px 0;
}
.page-wrapper{
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  grid-gap: 10px;
}
.page-element{
  border: 1px solid #c93c0c;
  border-radius: 5px;
  padding: 5px 10px;
}
.current-page{
  background: #f3ccbd;
}
</style>