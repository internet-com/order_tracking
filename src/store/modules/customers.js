import CustomersAPI from '@/api/customers'

// initial state
const state = {
  all: [],
  customer: {}
}

// getters
const getters = {
  allCustomers: state => state.all,
  customer: state => state.customer
}

// actions
const actions = {
  getAllCustomers ({ commit }) {
    CustomersAPI.getCustomers().then(response => {
      let customers = response.data
      commit('setCustomers', customers)
    })
  },
  getCustomer({ commit }, customerId){
    CustomersAPI.getCustomer(customerId).then(response => {
      let customer = response.data
      customer.customer_items_attributes = customer.customer_items
      commit('setCustomer', customer)
    })
  },
  createCustomer({ commit }, customer){
    return CustomersAPI.createCustomer(customer).then(response => {
      let customer = response.data
      return Promise.resolve(customer)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  updateCustomer({ commit }, customer){
    return CustomersAPI.updateCustomer(customer).then(response => {
      let customer = response.data
      return Promise.resolve(customer)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  deleteCustomer({ commit }, customer){
    return CustomersAPI.deleteCustomer(customer).then(response => {
      let customers = state.all.filter(o => o.id != customer.id)
      commit('setCustomers', customers)
      return Promise.resolve(customer)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
}

// mutations
const mutations = {
  setCustomers (state, customers) {
    state.all = customers
  },
  setCustomer(state, customer){
    state.customer = customer
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}