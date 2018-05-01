import ProductsAPI from '@/api/products'

// initial state
const state = {
  all: [],
  product: {}
}

// getters
const getters = {
  allProducts: state => state.all,
  product: state => state.product
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    ProductsAPI.getProducts().then(response => {
      let products = response.data
      commit('setProducts', products)
    })
  },
  getProduct({ commit }, productId){
    ProductsAPI.getProduct(productId).then(response => {
      let product = response.data
      product.product_items_attributes = product.product_items
      commit('setProduct', product)
    })
  },
  createProduct({ commit }, product){
    return ProductsAPI.createProduct(product).then(response => {
      let product = response.data
      return Promise.resolve(product)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  updateProduct({ commit }, product){
    return ProductsAPI.updateProduct(product).then(response => {
      let product = response.data
      return Promise.resolve(product)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
  deleteProduct({ commit }, product){
    return ProductsAPI.deleteProduct(product).then(response => {
      let products = state.all.filter(o => o.id != product.id)
      commit('setProducts', products)
      return Promise.resolve(product)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  },
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  setProduct(state, product){
    state.product = product
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}