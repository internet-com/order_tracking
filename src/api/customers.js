import Vue from 'vue'

export default {
  getCustomers () {
    return Vue.axios.get('customers')
  },
  getCustomer (id) {
    return Vue.axios.get(`customers/${id}`)
  },
  createCustomer (customer) {
    return Vue.axios.post('customers', { customer })
  },
  updateCustomer (customer) {
    return Vue.axios.put(`customers/${customer.id}`, { customer })
  },
  deleteCustomer (customer) {
    return Vue.axios.delete(`customers/${customer.id}`)
  }
}
