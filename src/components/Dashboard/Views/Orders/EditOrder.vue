<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">Edit Order</h4>
	          <order-form :order="order"/>
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import OrderForm from './OrderForm.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Card,
      OrderForm
    },
    computed: {
      ...mapGetters({
        order: 'orders/order'
      }),
      orderId() {
        return this.$route.params.orderId
      }
    },
    mounted() {
      this.$store.dispatch('orders/getOrder', this.orderId)
    }
  }

</script>
<style>

</style>
