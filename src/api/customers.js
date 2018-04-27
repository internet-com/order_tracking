import _customers from '@/api/mocks/customers'
import Vue from 'vue'

export default {
  getCustomers() {
    return Vue.axios.get('customers')
  },

  createCustomer (customer, successCallback) {
    setTimeout(() => {
      // actual data will be return from server
      customer.id = _customers.length + 1
      successCallback(customer)
    }, 100)
  },
}