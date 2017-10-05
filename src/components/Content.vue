<template>
	<div class="post-body">
		<div class="post-body-text">{{ post.postText }}</div>
		<div @click.stop="handleClick">
			<content-photo v-if="isPhotos" :photos="post.resource"></content-photo>
			<content-article v-if="isArcitle" :article="post.resource"></content-article>
			<content-single v-if="isSingle" :photo="post.resource"></content-single>
			<content-video v-if="isVideo" :video="post.resource"></content-video>
		</div>
	</div>
</template>
<script>
import ContentPhoto from './ContentPhoto.vue'
import ContentArticle from './ContentArticle.vue'
import ContentSingle from './ContentSingle.vue'
import ContentVideo from './ContentVideo.vue'
export default {
	name: 'PostContent',
	data() {
		return {
			isPhotos: this.post.type === 'image-group',
			isArcitle: this.post.type === 'article',
			isSingle: this.post.type === 'image',
			isVideo: this.post.type === 'video',
		}
	},
	props: ['post', 'index'],
	components: {ContentPhoto, ContentArticle, ContentSingle, ContentVideo},
	methods: {
		handleClick() {
			this.$emit('contentClicked', this.post, this.index);
		}
	}
}
</script>
<style scoped>
.post-body {
  flex: 1;
  margin-top: 0.27rem;
  height: auto;
  line-height: 0.47rem;
  word-wrap: break-word;
  font-size: 0.33rem;
  background: #fff;
}
.post-body-text {
	white-space: pre-wrap;
}
</style>