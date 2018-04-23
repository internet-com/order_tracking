<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Customers</h4>
              <p class="card-category">List of all customers of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewCustomer' }" class="btn btn-fill btn-primary">Add new customer</router-link>
              <l-table class="table-hover table-striped"
                       :columns="tableColumns"
                       :data="customers">
              </l-table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import { mapGetters } from 'vuex'

  const tableColumns = {
    id: 'Id',
    name: 'Name',
    phone_number: 'Phone Number',
    address: 'Address',
    external_urls: 'External URLs'
  }

  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        tableColumns
      }
    },
    computed: {
      ...mapGetters({
        customers: 'customers/allCustomers'
      })
    },
    created () {
      this.$store.dispatch('customers/getAllCustomers')
    }
  }
</script>
<style>
</style>
