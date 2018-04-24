import _customers from './customers'
import { OrderState } from '@/settings/orders'

const _orders = [
  {
    id: 1,
    customer: _customers[0],
    order_items: [],
    shipping_address: 'Hoang Mai, Ha Noi',
    notes: '10000',
    shipping_total: 50,
    adjustment_total: -50,
    items_total: 100,
    total: 100,
    state: OrderState.requested
  },
  {
    id: 2,
    customer: _customers[1],
    order_items: [],
    shipping_address: 'Vinh Bao, Hai Phong',
    notes: '10000',
    shipping_total: 50,
    adjustment_total: 50,
    items_total: 100,
    total: 200,
    state: OrderState.completed
  },
]
export default _orders