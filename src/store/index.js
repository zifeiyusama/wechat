import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
const state = {
  allUser: {
    'lisi': {
      avatar: 'avatar2.JPG',
      userName: '李四',
      userId: 'lisi',
      region: '天津',
      wall: 'wall2.png'
    }
  },
  currentUserId: 'lisi',
  posts: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
