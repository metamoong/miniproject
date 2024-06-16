import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostsView from "../views/PostsView.vue";
import PostDetailView from "../views/PostDetailView.vue";
import NewPostView from "../views/NewPostView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/posts",
      name: "Posts",
      component: PostsView,
    },
    {
      path: "/posts/:id",
      name: "PostDetail",
      component: PostDetailView,
      props: true,
    },
    {
      path: "/new-post",
      name: "NewPost",
      component: NewPostView,
    },
  ],
});

export default router;
