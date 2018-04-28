import Vue from 'vue'

export default {
  getProducts() {
    return Vue.axios.get('products')
  },

  createProduct (product) {
    return Vue.axios.post('products', { product })
  },
}