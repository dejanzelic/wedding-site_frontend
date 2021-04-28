import Vue from 'vue'
import Vuex from 'vuex'
const api = require('./api');
const LANG_KEY = 'language'

const initLang = (() => {
  let lang = window.localStorage.getItem(LANG_KEY) || false
  return lang
})()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guests: {},
    guestsFetched: false,
    lang: initLang
  },
  mutations: {
    setGuests (state, data) {
      state.guests = data;
      state.guestsFetched = true;
    },
    onLangChanged (state, payload) {
      window.localStorage.setItem(LANG_KEY, payload.lang)
      state.lang = payload.lang
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
    changeLanguage ({ commit }, payload) {
      commit('onLangChanged', payload)
    }
  },
  modules: {
  }
})
