<template>
  <div class="posts" @click="handleGlobalClick()">
    <div class="post" v-for="(item, index) in items" :key="item.postId">
      <div class="post-left">
        <router-link :to="{ name: 'user', params: {userId: item.userId}}">
          <img :src="avatarBaseUrl + item.avatar" alt="">
        </router-link>
      </div>
      <div class="post-right">
        <div class="post-header">
          <router-link class="post-user" :to="{ name: 'user', params: {userId: item.userId}}">
            {{ item.userName }}
          </router-link>
        </div>
        <post-content :post="item" :index="index" @contentClicked="handleContentClick"></post-content>
        <div class="post-footer">
          {{ item.createdDate | timeAgo }}
          <div
           class="footer-like"
           v-if="item.userId !== currentUser.userId"
           @click.stop="toggleLikeButton(item.postId)">
            <img class="footer-like-img" src="/static/icon/like-comment.jpg"/>
          </div>
          <transition
           name= "clicklike-transition"
           enter-active-class="animated slideInRight"
           leave-active-class="animated slideOutRight"
          >
            <div class="click-button" v-if="showedLikeButton === item.postId" >
              <img
               class="click-img"
               @click.stop="like(item)"
               src="/static/icon/like-button.jpg"
               alt=""
              >
              <div class="click-line"></div>
              <img
               class="click-img"
               @click.stop="comment(item.postId, '')"
               src="/static/icon/comment-button.jpg"
               alt=""
              >
            </div>
          </transition>
          <div class="cover"></div>
        </div>
        <interaction
         :postId="item.postId"
         :likes="item.likes"
         :comments="item.comments"
         :users="item.interactionUser"
         @addComment="comment"
        ></interaction>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler"  spinner="circles" force-use-infinite-wrapper="true"></infinite-loading>
    <comment :contents="this.commentData" v-show="showCommentInput" @commentAdded="handleCommentAdded" :placeholders="commentInputHolder"></comment>
    <post-detail :show='showDetail' :post="detailPost" :index="detailIndex" @closeDetail="handleCloseDetail"></post-detail>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Interaction from './Interaction.vue'
import Comment from './Comment.vue'
import PostContent from './Content.vue'
import InfiniteLoading from 'vue-infinite-loading'
import PostDetail from './PostDetail.vue'
import { avatarBaseUrl } from '../config/env.js'
import animate from 'animate.css'
var _ = require('lodash')

export default {
  name: 'post',
  data() {
    return {
      avatarBaseUrl,
      showedLikeButton: '',
      commentData: {},
      showCommentInput: false,
      commentInputHolder: '',
      showDetail: false,
      detailPost: null,
      detailIndex: -1
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  props:['items'],
  components: {Interaction, Comment, PostContent, InfiniteLoading, PostDetail},
  methods: {
    ...mapActions(['fetchAllPosts']),
    infiniteHandler: _.debounce(function ($state){
      this.fetchAllPosts({userId:''}).then(() => {$state.loaded();});
    }, 2000),
    toggleLikeButton(postid) {
      if (this.showedLikeButton === postid) this.showedLikeButton = '';
      else this.showedLikeButton = postid;
    },
    like(post) {
      let userId = this.currentUser.userId,
          userName = this.currentUser.userName,
          postId = post.postId;
      this.showedLikeButton = '';
      if (post.likes.indexOf(userId) > -1) return;
      this.$store.dispatch('like', {
        userId,
        userName,
        postId,
      });
    },
    comment(postId, to, toName) {
      this.showedLikeButton = '';
      if (this.showCommentInput) {
        this.handleCommentAdded();
        return;
      }
      var payload = {
        postId: postId,
        comment: {
          userId: this.currentUser.userId,
          to: to,
        },
        userName: this.currentUser.userName
      };
      this.commentData = payload;
      if (toName) this.commentInputHolder = '@' + toName + ':';
      this.showCommentInput = true;
    },
    handleCommentAdded() {
      this.showCommentInput = false;
      this.commentInputHolder = '';
    },
    handleGlobalClick() {
      this.showedLikeButton = '';
      if(this.showCommentInput === true) this.handleCommentAdded();
    },
    handleContentClick(post, index) {
      this.detailPost = post;
      this.detailIndex = index;
      this.showDetail = true;
    },
    handleCloseDetail() {
      this.detailPost = null;
      this.detailIndex = -1;
      this.showDetail = false;
    }
  }
}
</script>
<style>
  .posts {
    margin-top: 1.11rem;
    background: #fff;
    height: auto;
    width: 10.0rem;
  }
  .post {
    overflow: hidden;
    width: 10.0rem;
    margin-bottom: 0.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 0.01rem solid #d9d9d9;
  }
  .post-left {
    float: left;
    margin-left: 0.33rem;
    width: 1.13rem;
    height: 1.13rem;
  }
  .post-left img {
    width: 1.13rem;
    height: 1.13rem;
  }
  .post-right {
    display: flex;
    flex-direction: column;
    float: left;
    margin-left: 0.13rem;
    margin-right: 0.33rem;
    width: 8.07rem;
  }
  .post-header {
    height: 0.4rem;
    width: 8.07rem;
    font-size: 0.4rem;
  }
  .post-user {
    color: #576b95;
  }
  .post-footer {
    position: relative;
    margin-top: 0.27rem;
    width: 8.07rem;
    height: 0.4rem;
    font-size: 0.27rem;
    color: #737373;
  }
  .footer-like {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0.43rem;
    width: 0.53rem;
    border-radius: 0.03rem;
    background: #97aad0;
    z-index: 200;
  }
  .footer-like-img {
    height: 0.43rem;
    width: 0.53rem;
  }
  .click-button {
    position: absolute;
    bottom: -0.33rem;
    right: 0.53rem;
    display: flex;
    width: 4.27rem;
    height: 0.64rem;
    padding: 0.2rem 0.27rem;
    border-radius: 0.11rem;
    background: #4c5154;
    z-index: 80;
  }
  .click-img {
    width: 2.0rem;
    height: 0.64rem;
  }
  .click-line {
    width: 0.03rem;
    height: 0.64rem;
    background: #363d40;
  }
  .cover {
    position: absolute;
    right: -0.33rem;
    bottom: -0.33rem;
    width: 0.87rem;
    height: 1.04rem;
    background: #fff;
    z-index: 100;
  }
  .click-button {
    -webkit-animation-duration: .3s;
    -moz-animation-duration: .3s;
    -o-animation-duration: .3s;
    animation-duration: .3s;
  }
</style>
