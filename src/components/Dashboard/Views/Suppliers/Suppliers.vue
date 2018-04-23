<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Suppliers</h4>
              <p class="card-category">List of all suppliers of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewSupplier' }" class="btn btn-fill btn-primary">Add new supplier</router-link>
              <l-table class="table-hover table-striped"
                       :columns="tableColumns"
                       :data="suppliers">
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
        suppliers: 'suppliers/allSuppliers'
      })
    },
    created () {
      this.$store.dispatch('suppliers/getAllSuppliers')
    }
  }
</script>
<style>
</style>
