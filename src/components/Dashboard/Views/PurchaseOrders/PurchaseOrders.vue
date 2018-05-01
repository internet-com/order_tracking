<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">PurchaseOrders</h4>
              <p class="card-category">List of all purchaseOrders of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewPurchaseOrder' }" class="btn btn-fill btn-primary">Add new purchaseOrder</router-link>
              <table class="table table-hover table-striped">
                <thead>
                  <th v-for="column in tableColumns">{{ column }}</th>
                </thead>
                <tbody>
                <tr v-for="purchaseOrder in purchaseOrders">
                  <td>{{ purchaseOrder.id }}</td>
                  <td>{{ purchaseOrder.supplier && purchaseOrder.supplier.name }}</td>
                  <td>{{ purchaseOrder.notes }}</td>
                  <td>{{ purchaseOrder.total }}</td>
                  <td><el-tag :type="stateType(purchaseOrder)" class="order__state">{{ purchaseOrder.state }}</el-tag></td>
                  <td class="actions">
                      <router-link :to="{ name: 'EditPurchaseOrder', params: { purchaseOrderId: purchaseOrder.id } }">
                        <el-button type="warning" icon="el-icon-edit" circle></el-button>
                      </router-link>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(purchaseOrder)"></el-button>
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
  import { PurchaseOrderState } from '@/settings/PurchaseOrders'

  const tableColumns = ['Id', 'Supplier Name', 'Notes', 'Total', 'State', 'Actions']

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
        purchaseOrders: 'purchase_orders/allPurchaseOrders'
      })
    },
    methods: {
      stateType(purchaseOrder) {
        switch(purchaseOrder.state){
          case PurchaseOrderState.requested:
            return 'info'
          case PurchaseOrderState.processing:
            return  ''
          case PurchaseOrderState.completed:
            return  'success'
        }
      },
      remove(purchaseOrder) {
        this.$confirm('Are you sure to delete this purchase order?').then(() => {
          this.$store.dispatch('purchase_orders/deletePurchaseOrder', purchaseOrder).then(() => {
            this.$customNotify("Purchase order has been deleted successfully")
          })
        })
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
