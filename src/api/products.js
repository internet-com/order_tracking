import Vue from 'vue'

export default {
  getProducts () {
    return Vue.axios.get('products')
  },
  getProduct (id) {
    return Vue.axios.get(`products/${id}`)
  },
  createProduct (product) {
    return Vue.axios.post('products', { product })
  },
  updateProduct (product) {
    return Vue.axios.put(`products/${product.id}`, { product })
  },
  deleteProduct (product) {
    return Vue.axios.delete(`products/${product.id}`)
  }
}
