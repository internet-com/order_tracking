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
                  <td><el-tag :type="stateType(purchase_order)" class="order__state">{{ purchase_order.state }}</el-tag></td>
                  <td>
                    <el-row>
                      <el-button type="warning" icon="el-icon-edit" circle></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </el-row>
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
  import { PurchaseOrderState } from '@/settings/purchase_orders'

  const tableColumns = ['Id', 'Supplier Name', 'Notes', 'Total', 'Actions']

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
    methods: {
      stateType(purchase_order) {
        switch(purchase_order.state){
          case PurchaseOrderState.requested:
            return 'info'
          case PurchaseOrderState.processing:
            return  ''
          case PurchaseOrderState.completed:
            return  'success'
        }
      }
    },
    created () {
      this.$store.dispatch('purchase_orders/getAllPurchaseOrders')
    }
  }
</script>
<style scoped>
  .order__state {
    width: 80px;
    text-align: center;
  }
</style>
