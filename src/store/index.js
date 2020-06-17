import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSuccess: ''
  },
  mutations: {
    SET_loginSuccess: (state, data) => {
      state.loginSuccess = data
    }
  },
  actions: {
    loginSuccess ({ commit }, data) {
      console.log('wo shi store')

      commit('SET_loginSuccess', data)
    }
  },
  modules: {}
})
