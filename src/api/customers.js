import _customers from '@/api/mocks/customers'

export default {
  getCustomers (successCallback) {
    setTimeout(() => successCallback(_customers), 100)
  },

  createCustomer (customer, successCallback) {
    setTimeout(() => {
      // actual data will be return from server
      customer.id = _customers.length + 1
      customer.count = 0 // count will be increased when a purchase order completes | decrease when a order completes
      successCallback(customer)
    }, 100)
  },
}