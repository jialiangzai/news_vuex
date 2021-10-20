import Vue from 'vue'
import Vuex from 'vuex'
import MyAxios from '../utils/request'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    detail: {}
  },
  mutations: {
    // 获取新闻列表
    setListPageData (state, payload) {
      state.list = payload
    },
    setDetailPageData (state, detail) {
      state.detail = detail
    }
  },
  actions: {
    async getNews ({ commit }) {
      const { data: { data: { results } } } = await MyAxios({
        url: 'articles',
        params: {
          channel_id: 0,
          timestamp: Date.now()
        }
      })
      commit('setListPageData', results)
      console.log(results)
    },
    // payload 载荷 是组价调用传递的参数 即id
    async getDetailById ({ commit }, artId) {
      const { data: { data } } = await MyAxios({
        url: `articles/${artId}`
      })
      commit('setDetailPageData', data)
      // console.log(data)
    }
  },
  modules: {
  }
})
