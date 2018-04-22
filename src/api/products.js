/**
 * Mocking client-server processing
 */
const _products = [
  {
    id: 1,
    name: 'Product 1',
    unit: 'cai',
    price: '11',
    description: 'hang xuat du',
    external_urls: 'www.facebook.com',
    count: 100
  },
  {
    id: 2,
    name: 'Product 2',
    unit: 'bo',
    price: '22',
    description: 'hang xuat du',
    external_urls: 'www.shopee.vn',
    count: 50
  }
]

export default {
  getProducts (successCallback) {
    setTimeout(() => successCallback(_products), 100)
  },

  createProduct (product, successCallback) {
    setTimeout(() => {
      product.id = _products.length + 1 // actual id will be return from server
      product.count = 0 // count will be increased when a purchase order completes | decrease when a order completes
      successCallback(product)
    }, 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5)
        ? cb()
        : errorCb()
    }, 100)
  }
}