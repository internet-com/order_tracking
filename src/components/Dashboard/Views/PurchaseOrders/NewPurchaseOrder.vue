<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">New PurchaseOrder</h4>
	          <purchaseOrder-form :purchaseOrder="newPurchaseOrder"/>
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import PurchaseOrderForm from './PurchaseOrderForm.vue'

  export default {
    components: {
      Card,
      PurchaseOrderForm
    },
    data() {
      return {
        newPurchaseOrder: {
          supplier_id: 1,
          notes: '',
          shipment_total: 0,
          adjustment_total: 0,
          purchase_order_items_attributes: []
        }
      }
    }
  }
</script>
