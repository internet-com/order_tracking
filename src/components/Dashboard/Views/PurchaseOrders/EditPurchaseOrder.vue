<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">Edit PurchaseOrder</h4>
	          <purchase-order-form :purchaseOrder="purchaseOrder"/>
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import PurchaseOrderForm from './PurchaseOrderForm.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Card,
      PurchaseOrderForm
    },
    computed: {
      ...mapGetters({
        purchaseOrder: 'purchase_orders/purchaseOrder'
      }),
      purchaseOrderId () {
        return this.$route.params.purchaseOrderId
      }
    },
    mounted () {
      this.$store.dispatch('purchase_orders/getPurchaseOrder', this.purchaseOrderId)
    }
  }

</script>
<style>

</style>
