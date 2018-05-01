<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">New Product</h4>
	          <product-form :product="newProduct"/>
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import ProductForm from './ProductForm.vue'

  export default {
    components: {
      Card,
      ProductForm
    },
    data() {
      return {
        newProduct: {
          price: 0,
          unit: 1
        }
      }
    }
  }

</script>
<style>

</style>
