import Vue from 'vue'

export default {
  getSuppliers () {
    return Vue.axios.get('suppliers')
  },
  getSupplier (id) {
    return Vue.axios.get(`suppliers/${id}`)
  },
  createSupplier (supplier) {
    return Vue.axios.post('suppliers', { supplier })
  },
  updateSupplier (supplier) {
    return Vue.axios.put(`suppliers/${supplier.id}`, { supplier })
  },
  deleteSupplier (supplier) {
    return Vue.axios.delete(`suppliers/${supplier.id}`)
  }
}
