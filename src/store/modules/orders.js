import OrdersAPI from '@/api/orders'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allOrders: state => state.all
}

// actions
const actions = {
  getAllOrders ({ commit }) {
    OrdersAPI.getOrders(orders => {
      commit('setOrders', orders)
    })
  },
  createOrder({ commit }, order){
    OrdersAPI.createOrder(order, (order) =>{
      commit('create', order)
    })
  }
}

// mutations
const mutations = {
  setOrders (state, orders) {
    state.all = orders
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