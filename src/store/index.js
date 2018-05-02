import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import orders from './modules/orders'
import customers from './modules/customers'
import suppliers from './modules/suppliers'
import purchase_orders from './modules/purchase_orders'
import statistics from './modules/statistics'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    orders,
    customers,
    suppliers,
    purchase_orders,
    statistics
  }
})
