import Vue from 'vue'
import Vuex from 'vuex'
import { $http } from '@/helpers/';
import Registration from './Registration/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthorized: false,
    userInfo: null,
    isFull: false
  },
  mutations: {
    'SET_IS_AUTH'(state, payload) {
      state.isAuthorized = payload;
    },
    'SET_USER_INFO'(state, payload) {
      state.userInfo = payload;
    },
    'SET_FULL'(state, payload) {
      state.isFull = payload;
    }
  },
  getters: {
    'GET_IS_AUTH'({ isAuthorized }) {
      return isAuthorized;
    },
    'GET_USER_INFO'({ userInfo }) {
      return userInfo;
    },
    'IS_FULL'({ isFull }) {
      return isFull;
    }
  },
  actions: {
    async asyncSignIn({commit}, payload) {
      try {
        const {data = {}} = await $http.get('http://localhost:3003/sign-in', payload);
        const isAuthorized = data.isAuthorized || false;

        commit('SET_IS_AUTH', isAuthorized);
        commit('SET_USER_INFO', data['user_info'] || null);

        return isAuthorized;
      } catch(error) {
        throw error;
      }
    }
  },
  modules: {
    Registration
  }
})
