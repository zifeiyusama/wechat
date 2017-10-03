<template>
  <div class="post-photo-container">
    <div class="post-body-photo" v-for="item in photos">
    	<img class="post-body-photo-img" :src="postThumbBaseUrl + item.thumb" alt="">
    </div>
  </div>
</template>
<script>
import { postBaseUrl, postThumbBaseUrl } from '../config/env.js'
export default {
	name: 'ContentPhoto',
	props: ['photos'],
	data() {
		return {
			postBaseUrl,
			postThumbBaseUrl
		}
	}
}
</script>
<style scoped>
.post-photo-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.2rem;
}
.post-body-photo {
    width: 2.11rem;
    height: 2.11rem;
    margin-right: 0.13rem;
    margin-top: 0.13rem;
}
.post-body-photo-img {
	width: 2.11rem;
  height: 2.11rem;
}
</style>