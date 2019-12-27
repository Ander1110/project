import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    getList(state,list){
      state.list = list
    }
  },
  actions: {
    getList({commit}){
      axios.get('/mock/movie.json').then(res=>{
        commit('getList',res.data.movieList)
      })
    }
  },
  modules: {
  }
})
