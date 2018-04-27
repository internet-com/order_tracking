import Vue from 'vue'

export default {
  getCustomers() {
    return Vue.axios.get('customers')
  },

  createCustomer (customer) {
    return Vue.axios.post('customers', { customer })
  },
}