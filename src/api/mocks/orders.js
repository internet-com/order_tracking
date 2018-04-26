import _customers from './customers'
import _products from './products'
import { OrderState } from '@/settings/orders'

const _orders = [
  {
    id: 1,
    customer: _customers[0],
    customer_id: _customers[0].id,
    shipping_address: 'Hoang Mai, Ha Noi',
    notes: '10000',
    shipment_total: 50,
    adjustment_total: -50,
    order_items: [
      {
        price: _products[0].price,
        product_id: _products[0].id,
        quantity: 1
      }
    ],
    items_total: 10000,
    total: 10000,
    state: OrderState.requested
  },
  {
    id: 2,
    customer: _customers[1],
    customer_id: _customers[1].id,
    shipping_address: 'Vinh Bao, Hai Phong',
    notes: '10000',
    shipment_total: 50,
    adjustment_total: 50,
    order_items: [
      {
        price: _products[0].price,
        product_id: _products[0].id,
        quantity: 10
      },
      {
        price: _products[1].price,
        product_id: _products[1].id,
        quantity: 2
      }
    ],
    items_total: 20000,
    total: 20100,
    state: OrderState.processing
  },
  {
    id: 3,
    customer: _customers[0],
    customer_id: _customers[0].id,
    shipping_address: 'Hoang Mai, Ha Noi',
    notes: '10000',
    shipment_total: 50,
    adjustment_total: -50,
    order_items: [],
    items_total: 0,
    total: 100,
    state: OrderState.delivering
  },
  {
    id: 4,
    customer: _customers[1],
    customer_id: _customers[1].id,
    shipping_address: 'Vinh Bao, Hai Phong',
    notes: '10000',
    shipment_total: 50,
    adjustment_total: 50,
    order_items: [],
    items_total: 100,
    total: 200,
    state: OrderState.completed
  },
  {
    id: 5,
    customer: _customers[0],
    customer_id: _customers[0].id,
    shipping_address: 'Hoang Mai, Ha Noi',
    notes: '10000',
    shipment_total: 50,
    adjustment_total: -50,
    order_items: [],
    items_total: 100,
    total: 100,
    state: OrderState.returned
  }
]
export default _orders