import {createStore} from "vuex";
import {postModule} from "@/store/postModule";

export default createStore({
    // state: {
    //     likes: 0,
    //     isAuth: false,
    // },
    // getters: {},
    // mutations: {
    //     incrementLikes(state) {
    //         state.likes += 1;
    //     },
    //     decrementLikes(state) {
    //         state.likes -= 1;
    //     },
    //     authenticate(state) {
    //         state.isAuth = true;
    //     },
    // },
    // actions: {},
    modules: {
        post: postModule,
    },
});