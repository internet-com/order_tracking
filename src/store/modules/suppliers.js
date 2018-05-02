import SuppliersAPI from '@/api/suppliers'

// initial state
const state = {
  all: [],
  supplier: {}
}

// getters
const getters = {
  allSuppliers: state => state.all,
  supplier: state => state.supplier
}

// actions
const actions = {
  getAllSuppliers ({ commit }) {
    SuppliersAPI.getSuppliers().then(response => {
      let suppliers = response.data
      commit('setSuppliers', suppliers)
    })
  },
  getSupplier ({ commit }, supplierId) {
    SuppliersAPI.getSupplier(supplierId).then(response => {
      let supplier = response.data
      supplier.supplier_items_attributes = supplier.supplier_items
      commit('setSupplier', supplier)
    })
  },
  createSupplier ({ commit }, supplier) {
    return SuppliersAPI.createSupplier(supplier).then(response => {
      let supplier = response.data
      return Promise.resolve(supplier)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  updateSupplier ({ commit }, supplier) {
    return SuppliersAPI.updateSupplier(supplier).then(response => {
      let supplier = response.data
      return Promise.resolve(supplier)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  deleteSupplier ({ commit }, supplier) {
    return SuppliersAPI.deleteSupplier(supplier).then(response => {
      let suppliers = state.all.filter(o => o.id != supplier.id)
      commit('setSuppliers', suppliers)
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
  setSupplier (state, supplier) {
    state.supplier = supplier
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
