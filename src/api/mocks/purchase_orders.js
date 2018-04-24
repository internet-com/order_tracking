const _purchase_orders = [
  {
    id: 1,
    supplier: {
      id: 1,
      name: 'Linh Nguyen',
      phone_number: '01656110787',
      address: 'Ha Noi'
    },
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
    supplier: {
      id: 2,
      name: 'Ngoc Anh',
      phone_number: '016549589065',
      address: 'Ha Noi'
    },
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