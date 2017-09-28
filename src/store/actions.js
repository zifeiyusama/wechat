import api from '../api/data'
import * as types from './mutation-types'

export const actions = {
  //点赞
  like({ commit }, payload) {
    api.like(
      payload,
      (result) => {
        if(result === true) {
          commit(types.LIKE, payload)
        }
      }
    );
  },
  comment({ commit }, payload) {
    api.comment(payload.comment, comment => {
      commit(types.COMMENT, {
        comment: comment,
        userName: payload.userName,
        postId: payload.postId
      });
    });
  },
  //获取所有用户
  fetchUsers({ commit, getters }, payload) {
    api.fetchAllUsers(
      payload.userId,
      getters.userIdSet,
      users => commit(types.RECEIVE_USERS, JSON.parse(users))
    );
  },
  //获取单个用户
  checkoutUserInfo({ commit }, payload) {
    api.fetchUser(
      payload.userId,
      user => commit(types.CHECKOUT_USERINFO, JSON.parse(user))
    );
  },
  //获取所有post
  fetchAllPosts({ commit }, payload) {
    api.fetchAllPosts(
      payload.userId,
      posts => {
        commit(types.RECEIVE_POSTS, JSON.parse(posts))
      }
    );
  },
  // //获取post和用户
  // fetchAllData({ commit, dispatch }, payload) {
  //   dispatch('fetchAllPosts', payload).then(() => {dispatch('fetchUsers', payload)});
  // },
}
