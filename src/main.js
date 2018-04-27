import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
require('./elementUI')

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'
import './assets/sass/custom.scss'

// router setup
import routes from './routes/routes'
import axios from './api/vue-axios'
import customNotify from './plugins/customNotify'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(customNotify)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history', // remove hashbang
  linkActiveClass: 'nav-item active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  render: h => h(App)
})
