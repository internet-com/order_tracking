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
    customersAPI.getCustomers(customers => {
      commit('setCustomers', customers)
    })
  },
  createCustomer({ commit }, customer){
    customersAPI.createCustomer(customer, (customer) =>{
      commit('create', customer)
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