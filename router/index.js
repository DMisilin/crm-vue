import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'empty'
    },
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'empty'
    },
    component: () => import('../views/Register')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Categories')
  },
  {
    path: '/detail-record',
    name: 'Detail-record',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Detail-record')
  },
  {
    path: '/history',
    name: 'History',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/History')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Record')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
