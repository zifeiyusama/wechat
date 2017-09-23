import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
const Home = () => import('../pages/home/Home.vue');
const User = () => import('../pages/user/User.vue');
const Post = () => import('../pages/post/PostDetail.vue');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/post',
      component: Post
    }
  ]
});
