<template>
	<div class="post-video-container">
    <img class="post-video-img" :src="postThumbBaseUrl + video.thumb" alt="">
	</div>
</template>
<script>
import {postThumbBaseUrl,videoBaseUrl} from '../config/env.js'
export default {
	name: 'ContentVideo',
	data() {
		return {
			postThumbBaseUrl,
			videoBaseUrl
		}
	},
	props: ['video']
}
</script>
<style scoped>
.post-video-container {
	margin-top: 0.2rem;
	max-height: 4.8rem;
	width: 8.07rem;
}
.post-video-img {
	max-height: 4.8rem;
	max-width: 8.07rem;
}
</style>