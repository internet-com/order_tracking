<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">PurchaseOrders</h4>
              <p class="card-category">List of all purchase orders of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewPurchaseOrder' }" class="btn btn-fill btn-primary">Add new purchase order</router-link>
              <table class="table table-hover table-striped">
                <thead>
                  <th v-for="column in tableColumns">{{ column }}</th>
                </thead>
                <tbody>
                <tr v-for="purchase_order in purchase_orders">
                  <td>{{ purchase_order.id }}</td>
                  <td>{{ purchase_order.supplier.name }}</td>
                  <td>{{ purchase_order.notes }}</td>
                  <td>{{ purchase_order.total }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import { mapGetters } from 'vuex'
  const tableColumns = ['Id', 'Supplier Name', 'Notes', 'Total']
  export default {
    components: {
      Card
    },
    data () {
      return {
        tableColumns
      }
    },
    computed: {
      ...mapGetters({
        purchase_orders: 'purchase_orders/allPurchaseOrders'
      })
    },
    created () {
      this.$store.dispatch('purchase_orders/getAllPurchaseOrders')
    }
  }
</script>
<style>
</style>
