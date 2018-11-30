import { getUserId, setUserId } from '@/utils/auth'
import { auth } from '@/api/auth'

const user = {
  state: {
    userid: getUserId()
  },
  mutations: {
    SET_USERID: (state, userid) => {
      state.userid = userid
    }
  },
  actions: {
    Auth ({ dispatch }, code) {
      return new Promise((resolve, reject) => {
        auth(code).then(data => {
          const userid = data.data[0]
          setUserId(userid)
          dispatch('SET_USERID', userid)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
