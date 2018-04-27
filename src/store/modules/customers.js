import customersAPI from '@/api/customers'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allCustomers: state => state.all
}

// actions
const actions = {
  getAllCustomers ({ commit }) {
    customersAPI.getCustomers().then(response => {
      let customers = response.data
      commit('setCustomers', customers)
    })
  },
  createCustomer({ commit }, customer){
    return customersAPI.createCustomer(customer).then(response => {
      let customer = response.data
      commit('create', customer)
      return Promise.resolve(customer)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  }
}

// mutations
const mutations = {
  setCustomers (state, customers) {
    state.all = customers
  },
  create(state, customer){
    state.all.push(customer)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}