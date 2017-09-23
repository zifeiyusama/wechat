<template>
<div class="album">
  <div class="content-left">
    Album
  </div>
  <div class="content-right">
    <img class="album-img" src="/static/avatar1.png" alt="">
    <img class="album-img" src="/static/avatar1.png" alt="">
    <img class="album-img" src="/static/avatar1.png" alt="">
    <img class="album-img" src="/static/avatar1.png" alt="">
  </div>
  <div class="view-more"></div>
</div>
  <!-- <div>
    this is the album of <span>{{ userId }}</span>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div>
      <img v-for="img in posts" :src="postThumbBaseUrl + img.thumb" alt="post">
    </div>
    <div v-show="hasMore">
      More
    </div>
  </div> -->
</template>
<script>
import api from '../api/data.js'
import { postThumbBaseUrl } from '../config/env.js'

export default {
  name: 'album',
  data() {
    return {
      loading: false
    }
  },
  props: ['userId'],
  computed: {
    hasMore() {
      return this.posts.length === 4 ? ture : false;
    }
  },
  created() {
    //TODO 确定界面跳转方式后要看组件更新机制是否需要修改
    this.posts = [];
    this.loading = true;
    Promise.resolve(api.fetchOwnPosts(this.userId))
           .then(() => this.loading = false);
  }
}
</script>
<style scoped>
  .content-left {
    width: 1.73rem;
    margin-left: 0.36rem;
    color: #535353;
  }
  .content-right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 0.36rem;
    color: #000;
  }
  .view-more {
    position: relative;
    margin-left: 0.36rem;
    margin-right: 0.21rem;
    width: 0;
    height: 0;
    border-width: 0.17rem 0.21rem;
    border-style: dashed dashed dashed solid;
    border-color: transparent transparent transparent #c7c7cc;
  }
  .view-more:after {
    content: "";
    position: absolute;
    left: -0.21rem;
    top: -0.11rem;
    display: block;
    width: 0;
    height: 0;
    border-width: 0.11rem 0.16rem;
    border-style: dashed dashed dashed solid;
    border-color: transparent transparent transparent #fff;
  }
  .album {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 2.27rem;
    letter-spacing: 0;
  }
  .album-img {
    height: 1.47rem;
    width: 1.47rem;
  }
</style>
