import Vue from 'vue'

export default {
  getSuppliers() {
    return Vue.axios.get('suppliers')
  },

  createSupplier (supplier) {
    return Vue.axios.post('suppliers', { supplier })
  },
}