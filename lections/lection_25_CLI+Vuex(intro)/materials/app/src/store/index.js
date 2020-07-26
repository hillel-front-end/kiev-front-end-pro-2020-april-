import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foo: 123
  },
  mutations: {
    setFoo(state, payload) {
      state.foo = payload;
    }
  },
  actions: {
  },
})
