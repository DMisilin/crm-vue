import Vue from 'vue'
import Vuelidate from 'vuelidate/src'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let app

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)

// date - name, dateFilter - func
Vue.filter('date', dateFilter)

const firebaseConfig = {
  apiKey: 'AIzaSyAYrauTnUqLypEGV8pMdgikJWghCN634ho',
  authDomain: 'vue-crm-dm.firebaseapp.com',
  databaseURL: 'https://vue-crm-dm.firebaseio.com',
  projectId: 'vue-crm-dm',
  storageBucket: 'vue-crm-dm.appspot.com',
  messagingSenderId: '849151927879',
  appId: '1:849151927879:web:93018a42226f9857e5b362',
  measurementId: 'G-37DCDHGQ7B'
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
