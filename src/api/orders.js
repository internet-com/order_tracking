import Vue from 'vue'

export default {
  getOrders() {
    return Vue.axios.get('orders')
  },
  getOrder(id) {
    return Vue.axios.get(`orders/${ id }`)
  },
  createOrder(order) {
    return Vue.axios.post('orders', { order })
  },
  updateOrder (order) {
    return Vue.axios.put(`orders/${ order.id }`, { order })
  },
  deleteOrder (order) {
    return Vue.axios.delete(`orders/${ order.id }`)
  }
}