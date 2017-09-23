import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.LIKE] (state, user) {

  },
  [types.RECEIVE_USERS] (state, payload) {
    payload.users.forEach((user) => {
      Vue.set(state.allUser, user.userId, user);
    });
  },
  [types.CHECKOUT_USERINFO] (state, payload) {
    Vue.set(state.allUser, payload.user.userId, payload.user)
  },
  [types.RECEIVE_POSTS] (state, payload) {
    //实际是增量的
    state.posts = payload.posts;
  }
}
