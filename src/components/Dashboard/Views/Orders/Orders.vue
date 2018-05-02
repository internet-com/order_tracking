<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Orders</h4>
              <p class="card-category">List of all orders of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewOrder' }" class="btn btn-fill btn-primary">Add new order</router-link>
              <table class="table table-hover table-striped">
                <thead>
                  <th v-for="column in tableColumns">{{ column }}</th>
                </thead>
                <tbody>
                <tr v-for="order in orders">
                  <td>{{ order.id }}</td>
                  <td>{{ order.customer && order.customer.name }}</td>
                  <td>{{ order.shipping_address }}</td>
                  <td>{{ order.notes }}</td>
                  <td>{{ order.total }}</td>
                  <td><el-tag :type="stateType(order)" class="order__state">{{ order.state }}</el-tag></td>
                  <td class="actions">
                      <router-link :to="{ name: 'EditOrder', params: { orderId: order.id } }">
                        <el-button type="warning" icon="el-icon-edit" circle></el-button>
                      </router-link>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(order)"></el-button>
                  </td>
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
  import { OrderState } from '@/settings/orders'

  const tableColumns = ['Id', 'Customer Name', 'Shipping Address', 'Notes', 'Total', 'State', 'Actions']

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
        orders: 'orders/allOrders'
      })
    },
    methods: {
      stateType (order) {
        switch (order.state) {
          case OrderState.requested:
            return 'info'
          case OrderState.processing:
            return ''
          case OrderState.delivering:
            return 'warning'
          case OrderState.completed:
            return 'success'
          case OrderState.returned:
            return 'danger'
        }
      },
      remove (order) {
        this.$confirm('Are you sure to delete this order?').then(() => {
          this.$store.dispatch('orders/deleteOrder', order).then(() => {
            this.$customNotify('Order has been deleted successfully')
          })
        })
      }
    },
    created () {
      this.$store.dispatch('orders/getAllOrders')
    }
  }
</script>
<style scoped>
  .order__state {
    width: 80px;
    text-align: center;
  }
</style>
