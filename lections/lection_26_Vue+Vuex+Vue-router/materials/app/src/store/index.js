import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foo: '',
    role: 'user'
  },
  mutations: {
    'SET_FOO'(state, paylod) {
      state.foo = paylod;
    }
  },
  getters: {
    getFoo({ foo }) {
      return foo;
    },
    getRole({ role }) {
      return role;
    }
  },
  actions: {
  },
  modules: {
  }
})
