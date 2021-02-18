import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    exotheme:{
      mainBackground: "dark",
      navBackground:"light", //Color refers to a variatnt created in custom sass
      navText:"dark",
      btnBackground:"dark-primary",
      cardBackground:"light",
      cardText:"dark",
      chartBorder:"#1f8ef1",
    },
  
 
  },
  mutations: {
    toggleTheme(state){
      state.exotheme.mainBackground = state.exotheme.mainBackground === "light" ? "dark" : "light",
      state.exotheme.navText = state.exotheme.navText === "light" ? "dark" : "light",
      state.exotheme.navBackground = state.exotheme.navBackground === "light" ? "dark" : "light",
      state.exotheme.cardBackground = state.exotheme.cardBackground === "light" ? "dark" : "light",
      state.exotheme.cardText = state.exotheme.cardText === "dark" ? "light" : "dark",
      state.exotheme.btnBackground = state.exotheme.btnBackground === "dark-primary" ? "btn-color" : "dark-primary";
      state.exotheme.chartBorder = state.exotheme.chartBorder === "#1f8ef1" ? "red" : "#1f8ef1";
      // this.$refs.BarChart.renderChart();
      
      /*  --------------------------- */
    }

    
  },
  getters:{
    exotheme: state => state.exotheme,
    
    
  },
  actions: {
  },
  modules: {
  }
})
