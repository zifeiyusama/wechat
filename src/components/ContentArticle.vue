<template>
	<div class="post-article-container">
    <div class="post-article-photo">
      <img class="post-article-photo-img" :src="postThumbBaseUrl + article.thumb" alt="">
    </div>
    <div class="post-article-text">{{ article.text }}</div>
  </div>
</template>
<script>
import {postThumbBaseUrl} from '../config/env.js'
export default {
	name: 'ContentArticle',
	data() {
		return {
			postThumbBaseUrl,
		}
	},
	props: ['article']
}
</script>
<style scoped>
.post-article-container {
	display: flex;
	margin-top: 0.2rem;
	width: 7.76rem;
	height: 1.07rem;
	padding: 0.13rem;
	background: #f3f3f5;
}
.post-article-photo {
	width: 1.07rem;
	height: 1.07rem;
}
.post-article-text {
	height: 0.8rem;
	width: 6.43rem;
	margin: 0.13rem;
	line-height: 0.4rem;
	font-size: 0.36rem;
}
.post-article-photo-img {
	width: 1.07rem;
	height: 1.07rem;
}
</style>