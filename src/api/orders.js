import _customers from '@/api/mocks/customers'
import _orders from '@/api/mocks/orders'

export default {
  getOrders (successCallback) {
    setTimeout(() => successCallback(_orders), 100)
  },

  createOrder (order, successCallback) {
    setTimeout(() => {
       // actual data will be return from server
      order.id = _orders.length + 1
      order.customer = _customers.find(customer => customer.id == order.customer_id)
      let itemsTotal = order.order_items.reduce(((sum, item) => item.price * item.quantity + sum), 0)
      order.total = itemsTotal + parseInt(order.shipping_total) + parseInt(order.adjustment_total)
      successCallback(order)
    }, 100)
  },
}