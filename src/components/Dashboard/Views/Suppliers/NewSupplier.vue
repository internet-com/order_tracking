<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">New Supplier</h4>
	          <supplier-form/>
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import SupplierForm from './SupplierForm.vue'

  export default {
    components: {
      Card,
      SupplierForm
    }
  }

</script>
<style>

</style>
