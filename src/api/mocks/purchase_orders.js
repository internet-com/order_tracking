import _suppliers from './suppliers'

const _purchase_orders = [
  {
    id: 1,
    supplier: _suppliers[0],
    purchase_order_items: [],
    shipping_address: 'Hoang Mai, Ha Noi',
    notes: '10000',
    shipping_total: 50,
    adjustment_total: -50,
    items_total: 100,
    total: 100
  },
  {
    id: 2,
    supplier: _suppliers[1],
    purchase_order_items: [],
    shipping_address: 'Vinh Bao, Hai Phong',
    notes: '10000',
    shipping_total: 50,
    adjustment_total: 50,
    items_total: 100,
    total: 200
  },
]
export default _purchase_orders