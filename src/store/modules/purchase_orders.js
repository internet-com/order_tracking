import PurchaseOrdersAPI from '@/api/purchase_orders'

// initial state
const state = {
  all: [],
  purchaseOrder: {
    shipment_total: 0,
    adjustment_total: 0,
    purchase_order_items_attributes: []
  }
}

// getters
const getters = {
  allPurchaseOrders: state => state.all,
  purchaseOrder: state => state.purchaseOrder
}

// actions
const actions = {
  getAllPurchaseOrders ({ commit }) {
    PurchaseOrdersAPI.getPurchaseOrders().then(response => {
      let purchaseOrders = response.data
      commit('setPurchaseOrders', purchaseOrders)
    })
  },
  getPurchaseOrder ({ commit }, purchaseOrderId) {
    PurchaseOrdersAPI.getPurchaseOrder(purchaseOrderId).then(response => {
      let purchaseOrder = response.data
      purchaseOrder.purchase_order_items_attributes = purchaseOrder.purchase_order_items
      commit('setPurchaseOrder', purchaseOrder)
    })
  },
  createPurchaseOrder ({ commit }, purchaseOrder) {
    return PurchaseOrdersAPI.createPurchaseOrder(purchaseOrder).then(response => {
      let purchaseOrder = response.data
      return Promise.resolve(purchaseOrder)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  updatePurchaseOrder ({ commit }, purchaseOrder) {
    return PurchaseOrdersAPI.updatePurchaseOrder(purchaseOrder).then(response => {
      let purchaseOrder = response.data
      return Promise.resolve(purchaseOrder)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  deletePurchaseOrder ({ commit }, purchaseOrder) {
    return PurchaseOrdersAPI.deletePurchaseOrder(purchaseOrder).then(response => {
      let purchaseOrders = state.all.filter(o => o.id !== purchaseOrder.id)
      commit('setPurchaseOrders', purchaseOrders)
      return Promise.resolve(purchaseOrder)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  }
}

// mutations
const mutations = {
  setPurchaseOrders (state, purchaseOrders) {
    state.all = purchaseOrders
  },
  setPurchaseOrder (state, purchaseOrder) {
    state.purchaseOrder = purchaseOrder
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
