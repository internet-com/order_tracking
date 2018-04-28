import productsAPI from '@/api/products'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    productsAPI.getProducts().then(response => {
      let products = response.data
      commit('setProducts', products)
    })
  },
  createProduct({ commit }, product){
    return productsAPI.createProduct(product).then(response => {
      let product = response.data
      commit('create', product)
      return Promise.resolve(product)
    }).catch(error => {
      let errorMessages = error.response.data
      return Promise.reject(errorMessages)
    })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  create(state, product){
    state.all.push(product)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}