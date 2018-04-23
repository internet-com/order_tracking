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
    suppliersAPI.getSuppliers(suppliers => {
      commit('setSuppliers', suppliers)
    })
  },
  createSupplier({ commit }, supplier){
    suppliersAPI.createSupplier(supplier, (supplier) =>{
      commit('create', supplier)
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