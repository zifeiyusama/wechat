<template>
<div id="container">
  <div id="header">
    <div id="header-content">
      <div id="header-left">
        <span id="header-return"></span>
        <span id="header-left-content">Discover</span>
      </div>
      <div id="header-center">Profile</div>
      <div id="header-right">
        New
      </div>
    </div>
  </div>
  <div id="info">
    <img class="avatar info-left" :src="avatarBaseUrl + userInfo.avatar" alt="头像">
    <div class="info-right">
      <div class="wechat-name">{{ userInfo.userName }}</div>
      <div class="wechat-id">Wechat ID: {{ userInfo.userId }}</div>
    </div>
  </div>
  <div id="remark">
    <div class="remark-left">Set Remark And Tag</div>
    <div class="view-more"></div>
  </div>
  <div id="content">
    <div class="region">
      <div class="content-left">
        Region
      </div>
      <div class="content-right">
        {{ userInfo.region }}
      </div>
    </div>
    <album :userId="userInfo.userId"></album>
    <div class="more">
      <div class="content-left">More</div>
      <div class="content-right">
      </div>
      <div class="view-more"></div>
    </div>
  </div>
  <div id="footer">
    <a class="button">Message</a>
  </div>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Album from '../../components/Album.vue'
import { avatarBaseUrl } from '../../config/env.js'


export default {
  name: 'user',
  data() {
    return {
      avatarBaseUrl,
    }
  },
  components: { Album },
  computed: mapState({
    userInfo(state) {
      return state.allUser[this.$route.params.userId];
    }
  }),
  methods: {
    ...mapActions(['checkoutUserInfo'])
  },
  mounted() {
    this.checkoutUserInfo(this.userInfo.userId)
  }
}
</script>
<style scoped>
  * {
  padding: 0;
  margin: 0;
}
html {
  font-size: 75px;
}
#container {
  overflow: hidden;
  width: 10.0rem;
  height: 19.2rem;
  margin: 0 auto;
  background: #efeff3;
}
  #header {
    position: fixed;
    width: 10.0rem;
    height: 1.71rem;
    z-index: 1000;
    background: #35353a;
    color: #fff;
    font-size: 0.4rem;
  }
  #header-content {
    display: flex;
    justify-content: space-between;
    margin-top: 0.91rem;
    height: 0.8rem;
  }
  #header-left {
    position: relative;
    margin-left: 0.36rem;
    height: 0.8rem;
    width: 4.0rem;
    color: #fff;
  }
  #header-left-content {
    height: 0.8rem;
    margin-left: 0.36rem;
  }
  #header-center {
    height: 0.8rem;
    text-align: center;
  }
  #header-right {
    margin-right: 0.36rem;
    height: 0.8rem;
    width: 4.0rem;
    text-align: right;
  }
  #header-return {
    position: absolute;
    display: inline-block;
    left: -0.32rem;
    width: 0;
    height: 0;
    border-width: 0.24rem 0.29rem;
    border-style: dashed solid dashed dashed;
    border-color: transparent #fff transparent transparent;
  }
  #header-return:after {
    content: "";
    position: absolute;
    left: -0.08rem;
    top: -0.13rem;
    display: block;
    width: 0;
    height: 0;
    border-width: 0.13rem 0.19rem;
    border-style: dashed solid dashed dashed;
    border-color: transparent #35353a transparent transparent;
  }
  #info {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 2.11rem;
    width: 10.0rem;
    height: 2.27rem;
    border-top: 0.01rem solid #d9d9d9;
    border-bottom: 0.01rem solid #d9d9d9;
    background: #fff;
  }
  .info-left {
    margin-left: 0.36rem;
  }
  .info-right {
    flex: 1;
    margin-left: 0.36rem;
    height: 1.73rem;
  }
  .avatar {
    border-radius: 0.07rem;
    width: 1.73rem;
    height: 1.73rem;
  }
  .wechat-name {
    color: #000;
    margin-top: 0.2rem;
    font-size: 0.4rem;
  }
  .wechat-id {
    color: #878787;
    margin-top: 0.33rem;
    font-size: 0.27rem;
  }
  #remark {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.4rem;
    height: 1.13rem;
    width: 10.0rem;
    border-top: 0.01rem solid #d9d9d9;
    border-bottom: 0.01rem solid #d9d9d9;
    background: #fff;
    font-size: 0.33rem;
  }
  .remark-left {
    flex: 1;
    margin-left: 0.36rem;
    color: #535353;
  }
  #content {
    margin-top: 0.4rem;
    width: 10.0rem;
    height: 4.64rem;
    border-top: 0.01rem solid #d9d9d9;
    border-bottom: 0.01rem solid #d9d9d9;
    background: #fff;
    font-size: 0.33rem;
  }
  .content-left {
    width: 1.73rem;
    margin-left: 0.36rem;
    color: #535353;
  }
  .content-right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 0.36rem;
    color: #000;
  }
  .view-more {
    position: relative;
    margin-left: 0.36rem;
    margin-right: 0.21rem;
    width: 0;
    height: 0;
    border-width: 0.17rem 0.21rem;
    border-style: dashed dashed dashed solid;
    border-color: transparent transparent transparent #c7c7cc;
  }
  .view-more:after {
    content: "";
    position: absolute;
    left: -0.21rem;
    top: -0.11rem;
    display: block;
    width: 0;
    height: 0;
    border-width: 0.11rem 0.16rem;
    border-style: dashed dashed dashed solid;
    border-color: transparent transparent transparent #fff;
  }
  .region {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 10.0rem;
    height: 1.17rem;
    border-bottom: 0.01rem solid #d9d9d9;
  }
  .more {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 0.01rem solid #d9d9d9;
    height: 1.17rem;
  }
  #footer {
    width: 10.0rem%;
  }
  .button {
    display: block;
    width: 8.93rem;
    height: 1.27rem;
    margin: 0 auto;
    margin-top: 0.53rem;
    line-height: 1.27rem;
    text-align: center;
    text-decoration: none;
    border-radius: 0.07rem;
    font-size: 0.4rem;
    color: #fff;
    background: #28b11a;
  }
</style>
