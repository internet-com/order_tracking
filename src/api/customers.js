import _customers from '@/api/mocks/customers'

export default {
  getCustomers (successCallback) {
    setTimeout(() => successCallback(_customers), 100)
  },

  createCustomer (customer, successCallback) {
    setTimeout(() => {
      // actual data will be return from server
      customer.id = _customers.length + 1
      successCallback(customer)
    }, 100)
  },
}