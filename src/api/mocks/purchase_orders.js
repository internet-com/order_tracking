import _suppliers from './suppliers'
import { PurchaseOrderState } from '@/settings/purchase_orders'

const _purchase_orders = [
  {
    id: 1,
    supplier: _suppliers[0],
    purchase_order_items: [],
    notes: '10000',
    shipment_total: 50,
    adjustment_total: -50,
    items_total: 100,
    total: 100,
    state: PurchaseOrderState.requested
  },
  {
    id: 2,
    supplier: _suppliers[1],
    purchase_order_items: [],
    notes: '10000',
    shipment_total: 50,
    adjustment_total: 50,
    items_total: 100,
    total: 200,
    state: PurchaseOrderState.processing
  },
  {
    id: 3,
    supplier: _suppliers[2],
    purchase_order_items: [],
    notes: '10000',
    shipment_total: 50,
    adjustment_total: 50,
    items_total: 200,
    total: 300,
    state: PurchaseOrderState.completed
  },
]
export default _purchase_orders