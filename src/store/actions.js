import api from '../api/data'
import * as types from './mutation-types'

export const actions = {
  //点赞
  like({ commit }, payload) {
    commit(types.LIKE, {});
  },
  //获取所有用户
  fetchUsers({ commit, getters }, payload) {
    api.fetchAllUsers(
      payload.userId,
      getters.userIdSet,
      users => commit(types.RECEIVE_USERS, {users})
    );
  },
  //获取单个用户
  checkoutUserInfo({ commit }, payload) {
    api.fetchUser(
      payload.userId,
      user => commit(types.CHECKOUT_USERINFO, {user})
    );
  },
  //获取所有post
  fetchAllPosts({ commit }, payload) {
    api.fetchAllPosts(
      payload.userId,
      posts => commit(types.RECEIVE_POSTS, {posts})
    );
  },
  //获取post和用户
  fetchAllData({ commit, dispatch }, payload) {
    dispatch('fetchAllPosts', payload).then(() => {dispatch('fetchUsers', payload)});
  },
}
