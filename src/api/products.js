import _products from '@/api/mocks/products'

export default {
  getProducts (successCallback) {
    setTimeout(() => successCallback(_products), 100)
  },

  createProduct (product, successCallback) {
    setTimeout(() => {
      // actual data will be return from server
      product.id = _products.length + 1
      product.count = 0 // count will be increased when a purchase order completes | decrease when a order completes
      successCallback(product)
    }, 100)
  },
}