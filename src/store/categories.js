import firebase from 'firebase/app'

export default {
  actions: {
    async fetchCategories ({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        const categories = (await firebase.database().ref(`user/${uid}/categories`).once('value')).val()
        // return Object.keys(categories).map(cat => {
        //   return { id: cat, title: categories[cat].title, limit: categories[cat].limit }
        // })
        return Object.keys(categories).map(cat => Object.assign({ id: cat }, categories[cat]))
      } catch (e) {
        console.log('Error! "Get Category"')
        throw e
      }
    },
    async createCategory ({ dispatch, commit }, { title, limit }) {
      try {
        const uid = await dispatch('getUid')
        const category = await firebase.database().ref(`user/${uid}/categories`).push({
          title,
          limit
        })
        return { title, limit, id: category.key }
      } catch (e) {
        console.log('Error! "createCategory"')
        throw e
      }
    }
  }
}
