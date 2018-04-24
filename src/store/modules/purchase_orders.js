import PurchaseOrdersAPI from '@/api/purchase_orders'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allPurchaseOrders: state => state.all
}

// actions
const actions = {
  getAllPurchaseOrders ({ commit }) {
    PurchaseOrdersAPI.getPurchaseOrders(purchase_orders => {
      commit('setPurchaseOrders', purchase_orders)
    })
  },
  createPurchaseOrder({ commit }, purchase_order){
    PurchaseOrdersAPI.createPurchaseOrder(purchase_order, (purchase_order) =>{
      commit('create', purchase_order)
    })
  }
}

// mutations
const mutations = {
  setPurchaseOrders (state, purchase_orders) {
    state.all = purchase_orders
  },
  create(state, purchase_order){
    state.all.push(purchase_order)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}