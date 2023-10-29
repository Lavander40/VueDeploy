import {ref, computed} from "vue";

export default function useSort(posts){
    const selectedSort = ref('');
    const sortPosts = computed(() => {
        return [...posts.value].sort((a, b)=> a[selectedSort.value]?.localeCompare(b[selectedSort.value]))
    })
    return{
        selectedSort,
        sortPosts,
    }
}