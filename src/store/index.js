import Vue from 'vue'
import Vuex from 'vuex'
const api = require('./api');


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guests: {},
    guestsFetched: false
  },
  mutations: {
    setGuests (state, data) {
      state.guests = data;
      state.guestsFetched = true;
    }
  },
  actions: {
    async fetchGuests({ commit, state }, inviteCode) {
      if (state.guestsFetched){
        console.log("Data already fetched, ignoring")
      }else{
        const response = await api.getGuests(inviteCode);
        commit("setGuests", response.data);
      }
    },
  },
  modules: {
  }
})
