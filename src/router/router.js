import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import Post from "@/pages/Post";
import FullPost from "@/pages/FullPost";
import PostGlobal from "@/pages/PostGlobal";
import CompositionPost from "@/pages/CompositionPost";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Post
    },
    {
        path: '/posts/:id',
        component: FullPost
    },
    {
        path: '/storage',
        component: PostGlobal
    },
    {
        path: '/composition',
        component: CompositionPost
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;