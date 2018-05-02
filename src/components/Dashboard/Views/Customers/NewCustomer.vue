<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
				  <card>
				    <h4 slot="header" class="card-title">New Customer</h4>
	          <customer-form :customer="newCustomer" />
  				</card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import CustomerForm from './CustomerForm.vue'

  export default {
    components: {
      Card,
      CustomerForm
    },
    data () {
      return {
        newCustomer: {
          name: '',
          address: '',
          phone_numer: '',
          external_urls: ''
        }
      }
    }
  }
</script>
