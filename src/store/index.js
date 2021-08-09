import Vue from 'vue'
import Vuex from 'vuex'
const api = require('./api');
const LANG_KEY = 'language'
import i18n from '../i18n'

const initLang = (() => {
  let lang = window.localStorage.getItem(LANG_KEY) || false
  i18n.locale = lang;
  return lang
})()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guests: {},
    guestsFetched: false,
    lang: initLang,
    error: {},
    inviteCode: "",
    // assume healthy unless otherwise set
    backendHealthy: true
  },
  mutations: {
    setGuests(state, data) {
      state.guests = data;
      state.guestsFetched = true;
    },
    setError(state, data) {
      state.error = data;
    },
    setInviteCode(state, data) {
      state.inviteCode = data;
    },
    setLang(state, payload) {
      window.localStorage.setItem(LANG_KEY, payload)
      state.lang = payload
      i18n.locale = payload;
    },
    healthy(state) {
      state.backendHealthy = true;
    },
    unhealthy(state) {
      state.backendHealthy = false;
    },
  },
  actions: {
    async fetchGuests({ commit, state, dispatch }, inviteCode) {
      if (state.guestsFetched) {
        console.log("Data already fetched, ignoring")
      } else {
        api.getGuests(inviteCode)
          .then((r) => {
            if (r.status === 200) {
              commit("setGuests", r.data);
              if (r.data.language) {
                commit('setLang', r.data.language)
              }
            } else {
              dispatch("showError", r.data.message);
            }
          });
      }
    },
    saveInviteCode({ commit }, payload) {
      commit('setInviteCode', payload)
    },
    changeLanguage({ commit }, payload) {
      commit('setLang', payload)
    },
    showError({ commit, dispatch }, message) {
      commit('setError', { "message": message, "show": true })

      setTimeout(() => {
        dispatch('clearError')
      }, 8000)
    },
    clearError({ commit }) {
      commit('setError', {})
    },
    checkHealth({ commit }) {
      api.getHealth()
        .then(r => {
          if (r.status === 200) {
            commit("healthy")
          } else {
            commit("unhealthy")
          }
        }).catch(() => {
          commit("unhealthy")
        })
    },
    putInvite({ state }) {
      api.putInvite(state.inviteCode, state.guests)
    },
    postAnswers({ state }, payload) {
      let response = []
      Object.keys(payload).forEach(key => {
        response.push({
          "name": key,
          "answer": payload[key]
        })
      });
      api.postAnswers(state.inviteCode, response)
    }
  },
  modules: {
  }
})
