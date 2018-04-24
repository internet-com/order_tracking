import _suppliers from '@/api/mocks/suppliers'
import _purchase_orders from '@/api/mocks/purchase_orders'

export default {
  getPurchaseOrders (successCallback) {
    setTimeout(() => successCallback(_purchase_orders), 100)
  },

  createPurchaseOrder (purchase_order, successCallback) {
    setTimeout(() => {
       // actual data will be return from server
      purchase_order.id = _purchase_orders.length + 1
      purchase_order.supplier = _suppliers.find(supplier => supplier.id == purchase_order.supplier_id)
      let itemsTotal = purchase_order.purchase_order_items.reduce(((sum, item) => item.price * item.quantity + sum), 0)
      purchase_order.total = itemsTotal + parseInt(purchase_order.shipping_total) + parseInt(purchase_order.adjustment_total)
      successCallback(purchase_order)
    }, 100)
  },
}