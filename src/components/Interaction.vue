<template>
<div class="interaction" v-if="hasInteraction">
	<div class="like" v-if="hasLikes">
	  <div class="heart-shape"></div>
	  <span class="heart">♡</span>
    <span v-for="user in likes">
      <a class="like-name" href="#">{{ users[user] }}</a>
    </span>
	</div>
  <div class="break-line" v-if="hasLikes && hasComments"></div>
	<div class="comments" v-if="hasComments">
    <div v-for="comment in comments" class="comment-line">
      <a  class="comment-name" href="#">
        {{ users[comment.userId]}}
      </a>
      <span v-show="comment.to"> &#64; <a class="comment-name" href="#">{{ users[comment.to] }}</a></span>
      ：
      <span class="comment-content" @click.stop="addComment(comment.userId, users[comment.userId])">{{ comment.content }}</span><br>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
	export default {
		name: 'interaction',
    props: ['postId','likes', 'comments', 'users'],
    methods: {
      addComment(to, toName) {
        if(to === this.currentUser.userId) return;
        this.$emit('addComment', this.postId, to, toName);
      }
    },
    computed: {
      ...mapGetters(['currentUser']),
      hasLikes(){return this.likes && this.likes.length > 0},
      hasComments(){return this.comments && this.comments.length > 0},
      hasInteraction() { return this.hasLikes || this.hasComments }
    }
	}
</script>
<style scoped>
	.interaction {
    position: relative;
    margin-top: 0.33rem;
    margin-right: 0.27rem;
    width: 8.12rem;
  }
  .interaction:before {
    content: "";
    position: absolute;
    left: 0.24rem;
    top: -0.27rem;
    width: 0;
    height: 0;
    border-width: 0.13rem;
    border-style: dashed dashed solid dashed;
    border-color: transparent transparent #f3f3f5 transparent;
  }
  .like {
    padding: 0.09rem 0.24rem;
    line-height: 0.47rem;
    font-size: 0.33rem;
    background: #f3f3f5;
  }
  .like-name {
    font-size: 0.33rem;
    color: #576b95;
  }
  .break-line {
    height: 0.02rem;
    width: 8.12rem;
    background: #d9d9d9;
  }
  .comments {
    padding: 0.03rem 0.24rem 0;
    background: #f3f3f5
  }
  .comment-line {
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.33rem;
  }
  .comment-content {
    color: #000;
  }
  .comment-name{
    font-size: 0.33rem;
    color: #576b95;
  }
  .heart {
  }
</style>