<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Orders</h4>
              <p class="card-category">List of all ordesr of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewOrder' }" class="btn btn-fill btn-primary">Add new order</router-link>
              <!-- <l-table class="table-hover table-striped"
                       :columns="tableColumns"
                       :data="orders">
              </l-table> -->
              <table class="table table-hover table-striped">
                <thead>
                  <th v-for="column in tableColumns">{{ column }}</th>
                </thead>
                <tbody>
                <tr v-for="order in orders">
                  <td>{{ order.id }}</td>
                  <td>{{ order.customer.name }}</td>
                  <td>{{ order.shipping_address }}</td>
                  <td>{{ order.notes }}</td>
                  <td>{{ order.total }}</td>
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
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import { mapGetters } from 'vuex'
  const tableColumns = ['Id', 'Customer Name', 'Shipping Address', 'Notes', 'Total']
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
        orders: 'orders/allOrders'
      }),
      formattedOrders(){

      }
    },
    created () {
      this.$store.dispatch('orders/getAllOrders')
    }
  }
</script>
<style>
</style>
