<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">Edit Product</h4>
	          <product-form :product="product"/>
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import ProductForm from './ProductForm.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Card,
      ProductForm
    },
    computed: {
      ...mapGetters({
        product: 'products/product'
      }),
      productId () {
        return this.$route.params.productId
      }
    },
    mounted () {
      this.$store.dispatch('products/getProduct', this.productId)
    }
  }

</script>
<style>

</style>
