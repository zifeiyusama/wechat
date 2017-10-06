<template>
  <div class="post-photo-container" @click.stop="handleClick($event)">
    <div class="post-body-photo" v-for="(item, index) in photos">
    	<img class="post-body-photo-img" :data-index="index" :src="postThumbBaseUrl + item.thumb" alt="">
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
	},
  methods: {
    handleClick(event) {
      if(event.target.tagName.toLowerCase() === 'img') {
        this.$emit('photosClick', parseInt(event.target.dataset.index));
      }
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