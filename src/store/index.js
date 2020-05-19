import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    users: [],
    searchValue: ''
  },
  mutations: {
    SET_LIST_USERS: (state, users) => {
      state.users = users
    },
    SET_SEARCH_VALUE: (state, search) => {
    state.searchValue = search
  },
    SET_USER: (state, id) => {
      const user = state.users.find(item => Number(item.id) === Number(id) )
      state.user = user
    }
  },
  actions: {
   async createListUsers(context) {
        const { data } = await axios.get('https://reqres.in/api/users',{params:{page:1, per_page:12}})
         const users = data.data
         context.commit('SET_LIST_USERS', users)
         return users

    }
  },
  getters: {
    getUsersList(state) {
      if (state.searchValue) {
        const filterUsers = state.users.filter(item => {
          return  item.last_name.toLowerCase().includes(state.searchValue.toLowerCase()) || item.first_name.toLowerCase().includes(state.searchValue.toLowerCase())
        })
        return filterUsers
      } else {
          return state.users
      }
    },

    getUser(state) {

      return state.user
    }

  }
})
