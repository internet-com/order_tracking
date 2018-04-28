import suppliersAPI from '@/api/suppliers'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allSuppliers: state => state.all
}

// actions
const actions = {
  getAllSuppliers ({ commit }) {
    suppliersAPI.getSuppliers().then(response => {
      let suppliers = response.data
      commit('setSuppliers', suppliers)
    })
  },
  createSupplier({ commit }, supplier){
    return suppliersAPI.createSupplier(supplier).then(response => {
      let supplier = response.data
      commit('create', supplier)
      return Promise.resolve(supplier)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  }
}

// mutations
const mutations = {
  setSuppliers (state, suppliers) {
    state.all = suppliers
  },
  create(state, supplier){
    state.all.push(supplier)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}