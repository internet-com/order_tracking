<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">New Purchase Order</h4>
	          <purchase-order-form/>
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
    }
  }

</script>
<style>

</style>
