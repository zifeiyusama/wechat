<template>
  <div class="post-detail" v-if="show" @click.stop="handleClick">
    <div class="detail-container">
      <img class="detail-content" :src="sourceUrl" v-if="post.type==='image' || loading">
      <video class="detail-content" autoplay="autoplay" v-if="!loading&&post.type==='video'">
        <source :src="sourceUrl" type="video/mp4">
      </video>
    </div>
    <div class="loader-container" v-if="loading">
      <div data-loader="circle-side"></div>
    </div>
  </div>
</template>
<script>
import {postThumbBaseUrl, postBaseUrl,videoBaseUrl} from '../config/env.js'

import 'css-loading'

export default {
  name: 'PostDetail',
  data() {
    return {
      postThumbBaseUrl,
      postBaseUrl,
      videoBaseUrl,
      sourceUrl: '',
      loading: true
    }
  },
  props: ['show', 'post', 'index'],

  methods: {
    handleClick() {
      this.$emit('closeDetail');
    }
  },
  updated(){
    if (!this.show) {
      this.loading = true;
    }
    if (this.show && this.loading) {
      this.sourceUrl = this.postThumbBaseUrl + this.post.resource.thumb;
      setTimeout(function(){
        if (this.post != null) {
          if (this.post.type==='image') {
            this.sourceUrl = this.postBaseUrl + this.post.resource.photo;
          }
          else if(this.post.type==='video') {
            this.sourceUrl = this.videoBaseUrl + this.post.resource.video;
          }
          this.loading = false;
        }
      }.bind(this), 1000);
    }
  }
}
</script>
<style>
.post-detail {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 10.0rem;
  height: 17.91rem;
  background: #000;
  z-index: 1000;
}
.detail-container {
  width: 10.0rem;
}
.detail-content {
  width: 10.1rem;
  /*max-width: 10.0rem;*/
  /*max-height: 17.92rem;*/
}
.loader-container {
  position: absolute;
  left: 50%;
  top: 50%;
}

</style>