import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
const state = {
  allUser: {
    'zhangsan': {
      avatar: 'avatar1.png',
    userName: '张三',
    userId: 'zhangsan',
    region: '河北',
    }
  },
  currentUserId: 'zhangsan',
  posts: []//posts不持有详细的post信息，供主页可正常展示即可
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
