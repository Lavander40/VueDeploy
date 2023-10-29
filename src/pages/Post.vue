<template>
  <div>
    <h2>News page</h2>
    <div class="app_btn">
      <custom-btn @click="showDialog">Create post</custom-btn>
      <custom-input v-model:value="searchBy" placeholder="Search..." style="flex-grow: 1;"/>
      <custom-select v-model:value="selectedSort" :options="sortOptions"/>
    </div>
    <custom-dialog v-model:show="dialogVisibility">
      <post-create @create="addPost"/>
    </custom-dialog>
    <post-list :posts="findInSort" @remove="removePost" v-if="!postLoading"></post-list>
    <strong v-else style="position: center; font-size: 18pt;">Loading...</strong>
        <div class="page-wrapper">
          <div class="page-element" v-show="currentPage!==1" @click="changePage(this.currentPage-1)">&lt;</div>
          <div class="page-element" v-for="page in pagesTotal" :key="page" :class="{'current-page': page === currentPage}" @click="changePage(page)">{{ page }}</div>
          <div class="page-element" v-show="currentPage!==pagesTotal" @click="changePage(this.currentPage+1)">&gt;</div>
        </div>
    <div v-intersection="fetchPosts"></div>
  </div>
</template>
<script>
import CustomDialog from "@/components/ui/CustomDialog";
import PostCreate from "@/components/PostCreate";
import PostList from "@/components/PostList";
import CustomBtn from "@/components/ui/CustomBtn";
import axios from 'axios';
import CustomSelect from "@/components/CustomSelect";
import CustomInput from "@/components/ui/CustomInput";
export default {
  name: "App",
  components: { CustomInput, CustomSelect, CustomBtn, PostList, PostCreate, CustomDialog},
  data() {
    return {
      posts: [],
      dialogVisibility: false,
      postLoading: false,
      selectedSort: '',
      searchBy: '',
      currentPage: 0,
      postLimit: 10,
      pagesTotal: 0,
      sortOptions: [
        {value: 'title', name: "By Name"},
        {value: 'body', name: "By Content"},
      ]
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
      this.dialogVisibility = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisibility = true;
    },
    changePage(page){
      this.currentPage = page;
    },
    async fetchPage(){
      try {
        this.postLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_page: this.currentPage, _limit: this.postLimit}});
        this.pagesTotal = Math.ceil(response.headers['x-total-count'] / this.postLimit);
        this.posts = response.data;
      } catch (e){
        alert("Error fetch")
      } finally {
        this.postLoading = false;
      }
    },
    async fetchPosts(){
      try {
        this.currentPage += 1;
        // this.postLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_page: this.currentPage, _limit: this.postLimit}});
        this.pagesTotal = Math.ceil(response.headers['x-total-count'] / this.postLimit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Error fetch");
      }
      // finally {
      //   this.postLoading = false;
      // }
    },
  },
  computed: {
    sortPosts(){
      return [...this.posts].sort((a, b)=> a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    },
    findInSort(){
      return this.sortPosts.filter(post => post.title.toLowerCase().includes(this.searchBy.toLowerCase()))
    },
  },
  watch: {
    currentPage(){
      this.fetchPage();
    },
      selectedSort(newValue){
        this.posts.sort((a, b)=> a[newValue]?.localeCompare(b[newValue]))
      }
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