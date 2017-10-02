<template>
<div id="comment-container" @keyup.enter="add">
  <input
   id="comment-input"
   type="email"
   name="email"
   ref="input"
   :placeholder='placeholders'
   >
<div id="comment-face"><img id="comment-face-img" src="../../static/icon/face.jpg"/></div>
</div>
</template>
<script>
export default {
  props: ['contents', 'placeholders'],
  methods: {
    add() {
      let temp = {
        postId: this.contents.postId,
        userName: this.contents.userName,
        comment: {
          userId: this.contents.comment.userId,
          to: this.contents.comment.to,
          content: this.$refs.input.value
        },
      }
      this.$store.dispatch('comment', temp);
      this.$refs.input.value = '';
      this.$emit('commentAdded');
    }
  }
}
</script>
<style scoped>
#comment-container {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  width: 10.0rem;
  height: 1.17rem;
  background: #fafafa;
  border-top: 0.01rem solid #bfbfbf;
  border-bottom: 0.01rem solid #bfbfbf;
  z-index: 1000;
}
#comment-input {
  margin-left: 0.4rem;
  width: 8.05rem;
  height: 0.75rem;
  border: 0.01rem solid #ededed;
}
#comment-face {
  font-size: 0.07rem;
  width: 0.77rem;
  height: 0.77rem;
  margin-left: 0.37rem;
}
#comment-face-img {
  width: 0.73rem;
  height: 0.73rem;
}
</style>