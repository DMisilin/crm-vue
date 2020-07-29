import firebase from 'firebase/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    },
    clearInfo (state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo ({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        console.log('lo_ol__line_19 uid:: ', uid)
        const iData = await firebase.database().ref(`/user/${uid}/info`).once('value')
        console.log('User info:: ', iData)
        const info = iData.val()
        console.log('lo_ol__line_23 info:: ', info)
        commit('setInfo', info)
      } catch (e) {
        console.log('[Error user info] ', e.message)
      }
    }
  },
  getters: {
    info: s => s.info
  }
}
