import OrdersAPI from '@/api/orders'

// initial state
const state = {
  all: [],
  order: {
    shipment_total: 0,
    adjustment_total: 0,
    order_items: []
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
    OrdersAPI.getOrders(orders => {
      commit('setOrders', orders)
    })
  },
  getOrder({ commit }, orderId){
    OrdersAPI.getOrder(orderId, (order) =>{
      commit('setOrder', order)
    })
  },
  createOrder({ commit }, order){
    OrdersAPI.createOrder(order, (order) =>{
      commit('create', order)
    })
  },
  updateOrder({ commit }, order){
    OrdersAPI.updateOrder(order, (order) =>{
      //
    })
  }
}

// mutations
const mutations = {
  setOrders (state, orders) {
    state.all = orders
  },
  setOrder(state, order){
    state.order = order
  },
  create(state, order){
    state.all.push(order)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}