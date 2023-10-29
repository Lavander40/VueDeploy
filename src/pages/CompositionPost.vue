<template>
  <div>
    <h2>News page</h2>
    <div class="app_btn">
      <custom-input v-model:value="searchBy" placeholder="Search..." style="flex-grow: 1;"/>
      <custom-select v-model:value="selectedSort" :options="sortOptions"/>
    </div>
    <post-list :posts="findInSorted" v-if="!postLoading"></post-list>
    <strong v-else style="position: center; font-size: 18pt;">Loading...</strong>
  </div>
</template>
<script>
import PostList from "@/components/PostList";
import CustomSelect from "@/components/CustomSelect";
import CustomInput from "@/components/ui/CustomInput";
import {usePost} from "@/hooks/usePost";
import useSort from "@/hooks/useSort";
import useFindInSort from "@/hooks/useFindInSort";
export default {
  name: "App",
  components: { CustomInput, CustomSelect, PostList},
  data() {
    return {
      dialogVisibility: false,
      sortOptions: [
        {value: 'title', name: "By Name"},
        {value: 'body', name: "By Content"},
      ]
    }
  },
  setup(props){ // eslint-disable-line no-unused-vars
    const {posts, postLoading, pagesTotal} = usePost(10);
    const {selectedSort, sortPosts} = useSort(posts);
    const {searchBy, findInSorted} = useFindInSort(sortPosts);
    return{
      posts,
      postLoading,
      pagesTotal,
      selectedSort,
      sortPosts,
      searchBy,
      findInSorted,
    }
  },
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