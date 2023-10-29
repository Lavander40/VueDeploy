import axios from "axios";
import {ref, onMounted} from "vue";

export function usePost(postLimit) {
    const posts = ref([]);
    const postLoading = ref(true);
    const pagesTotal = ref(0);
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_page: 1, _limit: postLimit}});
            pagesTotal.value = Math.ceil(response.headers['x-total-count'] / postLimit);
            posts.value = response.data;
        } catch (e){
            alert("Error fetch")
        } finally {
            postLoading.value = false;
        }
    }
    onMounted(fetching);
    return{
        posts,
        postLoading,
        pagesTotal,
    }
}