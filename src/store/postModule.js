import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
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
    }),
    getters: {
        sortPosts(state){
            return [...state.posts].sort((a, b)=> a[state.selectedSort]?.localeCompare(b[state.selectedSort]))
        },
        findInSort(state, getters){
            return getters.sortPosts.filter(post => post.title.toLowerCase().includes(state.searchBy.toLowerCase()))
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setPostLoading(state, bool) {
            state.postLoading = bool;
        },
        setCurrentPage(state, page) {
            state.postCurrentPage = page;
        },
        setPagesTotal(state, pagesTotal) {
            state.pagesTotal = pagesTotal;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchBy(state, searchBy) {
            state.searchBy = searchBy;
        },
    },
    actions: {
        async fetchPage({state, commit}){
            try {
                commit('setPostLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_page: state.currentPage, _limit: state.postLimit}});
                commit('setPagesTotal', Math.ceil(response.headers['x-total-count'] / state.postLimit));
                commit('setPosts', response.data);
            } catch (e){
                alert("Error fetch")
            } finally {
                commit('setPostLoading', false);
            }
        },
        async fetchPosts({state, commit}){
            try {
                commit('setCurrentPage', state.currentPage += 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_page: state.currentPage, _limit: state.postLimit}});
                commit('setPagesTotal', Math.ceil(response.headers['x-total-count'] / state.postLimit));
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (e) {
                alert("Error fetch");
            }
        },
        filterPost({state}, id) {
            state.posts = state.posts.filter(p => p.id !== id);
        }
    },
    namespaced: true
}