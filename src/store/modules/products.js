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
    productsAPI.getProducts(products => {
      commit('setProducts', products)
    })
  },
  createProduct({ commit }, product){
    productsAPI.createProduct(product, (product) =>{
      commit('create', product)
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