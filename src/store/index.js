import { createStore } from 'vuex'
import { HTTP } from '@/core/http.js'
import { UserModel } from '@/shared/user-model.js'
import { UserInfoModel } from '@/shared/user-info-model.js'

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    users: [],
    userInfo: null
  },
  mutations: {
    setUsers (state, payload) {
      state.users = [...payload]
    },
    setUserInfo (state, payload) {
      state.userInfo = { ...payload }
    }
  },
  getters: {
    getUsers (state) {
      return state.users
    },
    getUserInfo (state) {
      return state.userInfo
    }
  },
  actions: {
    async setUsers ({ commit }) {
      try {
        const url = '/users'
        const { data } = await HTTP.get(url)
        const users = data.map((user) => new UserModel(user))
        commit('setUsers', users)
      } catch (e) {
        console.log(e)
      }
    },
    async setUserInfo ({ commit }, payload) {
      try {
        const url = `/users/${payload}`
        const { data } = await HTTP.get(url)
        const userInfo = new UserInfoModel(data)
        commit('setUserInfo', userInfo)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
