import OrdersAPI from '@/api/orders'

// initial state
const state = {
  all: [],
  order: {
    shipment_total: 0,
    adjustment_total: 0,
    order_items_attributes: []
  }
}

// getters
const getters = {
  allOrders: state => state.all,
  order: state => state.order
}

// actions
const actions = {
  getAllOrders ({ commit }) {
    OrdersAPI.getOrders().then(response => {
      let orders = response.data
      commit('setOrders', orders)
    })
  },
  getOrder({ commit }, orderId){
    OrdersAPI.getOrder(orderId).then(response => {
      let order = response.data
      commit('setOrder', order)
    })
  },
  createOrder({ commit }, order){
    return OrdersAPI.createOrder(order).then(response => {
      let order = response.data
      return Promise.resolve(order)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  updateOrder({ commit }, order){
    return OrdersAPI.updateOrder(order).then(response => {
      let order = response.data
      return Promise.resolve(order)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
}

// mutations
const mutations = {
  setOrders (state, orders) {
    state.all = orders
  },
  setOrder(state, order){
    state.order = order
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}