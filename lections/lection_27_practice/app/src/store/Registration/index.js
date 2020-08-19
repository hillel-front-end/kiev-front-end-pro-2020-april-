import { $http, clearEmpty } from '@/helpers/';

export default {
    state: {
        regInfo: {}
    },
    mutations: {
        'SET_REG_INFO'(state, payload) {
            state.regInfo = {
                ...state.regInfo,
                ...payload
            }
        }
    },
    getters: {
        'GET_REG_INFO'({ regInfo }) {
            return clearEmpty(regInfo);
        }
    },
    actions: {
        async asyncSubmitRegistration(context, payload) {
            try {
              return await $http.post('http://localhost:3003/new-registration', payload)
            } catch (e) {

            }
        }
    }
}
