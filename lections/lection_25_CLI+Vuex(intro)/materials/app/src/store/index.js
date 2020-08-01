import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foo: 123,
    user: {name: null}
  },
  mutations: {
    setFoo(state, payload) {
      state.foo = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  getters: {
    getUserName(state) {
      return state.user.name || 'anonim';
    },
    foo() {
      return 123;
    }
  },
  actions: {
    async asyncSetFoo(context, payload) {
      const response = await fetch('http://localhost:3003/');
      const user = await response.json();
      // console.log(context, 'context');
      context.commit('setUser', user);
      // console.log(data, 'data');

    }
  }
})
