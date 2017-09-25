<template>
  <div class="posts">
    <div class="post" v-for="item in items">
      <div class="post-left">
        <img :src="avatarBaseUrl + item.avatar" alt="">
      </div>
      <div class="post-right">
        <div class="post-header"><a class="post-user" href="#">{{ item.userName }}</a></div>
        <div class="post-body">{{ item.postText }}</div>
        <div class="post-footer">
          {{ item.createdDate | timeAgo }}
          <div
           class="footer-like"
           v-if="item.userId !== currentUserId"
           @click="toggleLikeButton(item.postId)">
            <img class="footer-like-img" src="/static/icon/like-comment.jpg"/>
          </div>
          <transition
           name= "clicklike-transition"
           enter-active-class="animated slideInRight"
           leave-active-class="animated slideOutRight"
          >
            <div class="click-button" v-if="showedLikeButton === item.postId" >
              <img class="click-img" src="/static/icon/like-button.jpg" alt="">
              <div class="click-line"></div>
              <img class="click-img" src="/static/icon/comment-button.jpg" alt="">
            </div>
          </transition>
          <div class="cover"></div>
        </div>
        <interaction :likes="item.likes" :comments="item.comments" :users="item.interactionUser"></interaction>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import Interaction from './Interaction.vue'
import { avatarBaseUrl } from '../config/env.js'
import animate from 'animate.css'

export default {
  name: 'post',
  data() {
    return {
      avatarBaseUrl,
      showedLikeButton: ''
    }
  },
  computed: mapState({
    currentUserId: state => state.currentUserId
  }),
  props:['items'],
  components: {Interaction},
  methods: {
    toggleLikeButton(postid) {
      if (this.showedLikeButton === postid) this.showedLikeButton = '';
      else this.showedLikeButton = postid;
    }
  }
}
</script>
<style>
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
  .post-body {
    flex: 1;
    margin-top: 0.27rem;
    height: auto;
    line-height: 0.47rem;
    word-wrap: break-word;
    font-size: 0.33rem;
    background: #fff;
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
