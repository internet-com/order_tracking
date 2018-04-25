import _suppliers from '@/api/mocks/suppliers'
import _products from '@/api/mocks/products'
import _purchase_orders from '@/api/mocks/purchase_orders'
import { PurchaseOrderState } from '@/settings/purchase_orders'

export default {
  getPurchaseOrders (successCallback) {
    setTimeout(() => successCallback(_purchase_orders), 100)
  },

  createPurchaseOrder (purchase_order, successCallback) {
    setTimeout(() => {
       // actual data will be return from server
      purchase_order.id = _purchase_orders.length + 1
      purchase_order.supplier = _suppliers.find(supplier => supplier.id == purchase_order.supplier_id)
      let itemsTotal = 0
      purchase_order.purchase_order_items.forEach(item => {
        let product = _products.find(product => product.id == item.product_id)
        product.count = parseInt(product.count) + parseInt(item.quantity)
        itemsTotal += item.price * item.quantity
      })
      purchase_order.total = itemsTotal + parseInt(purchase_order.shipment_total) + parseInt(purchase_order.adjustment_total)
      purchase_order.state = PurchaseOrderState.requested
      successCallback(purchase_order)
    }, 100)
  },
}