import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMode: "light",
    navVariant: "primary",
    btnVariant: "dark"
  },
  mutations: {
    toggleMode(state){
      state.navVariant = state.navVariant === "primary" ? "dark" : "primary",
      state.currentMode = state.currentMode === "light" ? "dark" : "light",
      state.btnVariant = state.btnVariant === "dark" ? "secondary" : "dark";
    }
  },
  getters:{
    currentMode: state => state.currentMode,
    btnVariant: state => state.btnVariant,
    navVariant: state => state.navVariant,
  },
  actions: {
  },
  modules: {
  }
})
