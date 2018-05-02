import Vue from 'vue'

export default {
  getPurchaseOrders () {
    return Vue.axios.get('purchase_orders')
  },
  getPurchaseOrder (id) {
    return Vue.axios.get(`purchase_orders/${id}`)
  },
  createPurchaseOrder (purchase_order) {
    return Vue.axios.post('purchase_orders', { purchase_order })
  },
  updatePurchaseOrder (purchase_order) {
    return Vue.axios.put(`purchase_orders/${purchase_order.id}`, { purchase_order })
  },
  deletePurchaseOrder (purchase_order) {
    return Vue.axios.delete(`purchase_orders/${purchase_order.id}`)
  }
}
