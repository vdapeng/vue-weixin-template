import { getUserId, setUserId } from '@/utils/auth'
import { auth, login } from '@/api/auth'

const user = {
  state: {
    userid: getUserId(),
    user: {}
  },
  mutations: {
    SET_USERID: (state, userid) => {
      state.userid = userid
    },
    SER_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    Auth ({ commit }, code) {
      return new Promise((resolve, reject) => {
        auth(code).then(data => {
          const userid = data.data[0]
          setUserId(userid)
          commit('SET_USERID', userid)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    Login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data).then(data => {
          if (data.data.success) {
            const user = data.data.data
            setUserId(user.userid)
            commit('SET_USER', user)
            commit('SET_USERID', user.userid)
            resolve()
          } else {
            reject(data.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
