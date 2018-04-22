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
  },
  {
    id: 2,
    name: 'Product 2',
    unit: 'bo',
    price: '22',
    description: 'hang xuat du',
    external_urls: 'www.shopee.vn',
  }
]

export default {
  getProducts (successCallback) {
    setTimeout(() => successCallback(_products), 100)
  },

  createProduct (product, successCallback) {
    setTimeout(() => {
      product.id = _products.length + 1
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