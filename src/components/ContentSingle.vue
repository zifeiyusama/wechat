<template>
	<div class="post-single-container">
    <img class="post-single-img" :src="postThumbBaseUrl + photo.thumb" alt="">
	</div>
</template>
<script>
import {postThumbBaseUrl, postBaseUrl} from '../config/env.js'
export default {
	name: 'ContentSingle',
	data() {
		return {
			postThumbBaseUrl,
			postBaseUrl
		}
	},
	props: ['photo'],
}
</script>
<style scoped>
.post-single-container {
	margin-top: 0.2rem;
	max-height: 4.8rem;
	width: 8.07rem;
}
.post-single-img {
	max-height: 4.8rem;
	max-width: 8.07rem;
}
</style>