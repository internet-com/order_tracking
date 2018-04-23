import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import orders from './modules/orders'
import customers from './modules/customers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    orders,
    customers
  }
})