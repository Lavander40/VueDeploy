import {computed, ref} from "vue";

export default function useFindInSort(sortPosts){
    const searchBy = ref('');
    const findInSorted = computed(() => {
        return sortPosts.value.filter(post => post.title.toLowerCase().includes(searchBy.value.toLowerCase()))
    });
    return{
        searchBy,
        findInSorted,
    }
}