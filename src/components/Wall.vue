<template>
<div class="wall">
  <img class="wall-img" :src="userWallBaseUrl + userInfo.wall" alt="">
  <div class="wall-name">{{ userInfo.userName }}</div>
  <router-link :to="{ name: 'user', params: {userId: userId}}">
    <img class="wall-avatar" :src="avatarBaseUrl + userInfo.avatar"/>
  </router-link>
</div>
</template>
<script>
import { mapState } from 'vuex'
import { userWallBaseUrl, avatarBaseUrl } from '../config/env.js'

export default {
  name: 'wall',
  props: ['userId'],
  data() {
    return {
      userWallBaseUrl,
      avatarBaseUrl
    }
  },
  computed: mapState({
    userInfo(state) {
      return state.allUser[this.userId];
    }
  }),
}
</script>
<style scoped>
	.wall {
		position: relative;
		width: 10.0rem;
		height: 8.53rem;
	}
  .wall-img {
    width: 10.0rem;
    height: 8.53rem;
  }
  .wall-name {
    position: absolute;
    right: 2.8rem;
    bottom: 0.37rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.4rem;
    color: #fff;
  }
  .wall-avatar {
    position: absolute;
    width: 1.92rem;
    height: 1.92rem;
    right: 0.27rem;
    bottom: -0.6rem;
    padding: 0.07rem;
    border: 0.01rem solid #d9d9d9;
    background: #fff;
  }
</style>
