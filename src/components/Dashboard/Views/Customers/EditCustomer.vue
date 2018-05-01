<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">Edit Customer</h4>
	          <customer-form :customer="customer"/>
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import CustomerForm from './CustomerForm.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Card,
      CustomerForm
    },
    computed: {
      ...mapGetters({
        customer: 'customers/customer'
      }),
      customerId() {
        return this.$route.params.customerId
      }
    },
    mounted() {
      this.$store.dispatch('customers/getCustomer', this.customerId)
    }
  }
</script>
