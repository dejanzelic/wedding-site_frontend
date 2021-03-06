import Vue from 'vue'
import Vuex from 'vuex'
const api = require('./api');


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guests: []
  },
  mutations: {
    setGuests (state, data) {
      state.guests = data
    }
  },
  actions: {
    async fetchGuests({ commit }, inviteCode) {
      const response = await api.getGuests(inviteCode);
      commit("setGuests", response.data);
    },
  },
  modules: {
  }
})
