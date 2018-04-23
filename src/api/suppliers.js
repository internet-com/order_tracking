import _suppliers from '@/api/mocks/suppliers'

export default {
  getSuppliers (successCallback) {
    setTimeout(() => successCallback(_suppliers), 100)
  },

  createSupplier (supplier, successCallback) {
    setTimeout(() => {
      // actual data will be return from server
      supplier.id = _suppliers.length + 1
      successCallback(supplier)
    }, 100)
  },
}