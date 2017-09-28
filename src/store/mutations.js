import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.LIKE] (state, payload) {
    for (var i = 0; i < state.posts.length; i++) {
      if (payload.postId === state.posts[i].postId) {
        state.posts[i].likes.push(payload.userId);
        state.posts[i].interactionUser[payload.userId] = payload.userName;
        break;
      }
    }
  },
  [types.COMMENT] (state, payload) {
    for (var i = 0; i < state.posts.length; i++) {
      if (payload.postId === state.posts[i].postId) {
        let post = state.posts[i];
        post.comments.push(payload.comment);
        post.interactionUser[payload.comment.userId] = payload.userName;
        break;
      }
    }
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
    state.posts = payload;
  }
}
