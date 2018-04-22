<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">New Order</h4>
	          <order-form/>
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import OrderForm from './OrderForm.vue'

  export default {
    components: {
      Card,
      OrderForm
    }
  }

</script>
<style>

</style>
