import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import helper from '../utils/helper'

Vue.use(Vuex)

const state = {
  lang: '',
  searchingDate: helper.getToday(),
  lang_pack: {},
  searchData: {},
  memberInfo: {},
  byname: {code: 0},
  data: {},
  seasonInfo: {},
  errors: []
}

const mutations = {
  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_LANG (state, text) {
    localStorage.setItem('swallow_lang', text)
    state.lang = text
  },

  SET_SEARCHING_DATE (state, date) {
    state.searchingDate = date
  },

  SET_COOKIE_LANG (state) {
    var savedLang = localStorage.getItem('swallow_lang')
    var language = ''
    if (savedLang === null) {
      language = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
      language = language.split('-')[0]
      localStorage.setItem('swallow_lang', language)
    } else {
      language = savedLang
    }
    state.lang = language
  },

  SET_LANG_PACK (state) {
    axios.get('./static/js/lang.js')
    .then(response => {
      state.lang_pack = response.data
    })
    .catch(e => {
      state.errors.push(e)
    })
  }
}

const actions = {
  setActiveLang ({ commit }, lang) {
    commit('SET_ACTIVE_LANG', lang)
  },

  setSearchingDate ({ commit }, date) {
    commit('SET_SEARCHING_DATE', date)
  },

  setCookieLang ({ commit }) {
    commit('SET_COOKIE_LANG')
  },

  setLangPack ({ commit }) {
    commit('SET_LANG_PACK')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
