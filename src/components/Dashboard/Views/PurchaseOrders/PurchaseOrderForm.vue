<template>
    <form>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Supplier
            </label>
            <div>
              <el-select v-model="purchase_order.supplier_id" filterable placeholder="Supplier">
                <el-option
                  v-for="supplier in suppliers"
                  :key="supplier.id"
                  :label="supplier.name"
                  :value="supplier.id">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Shipping Address
            </label>
            <el-input placeholder="Please input" v-model="purchase_order.shipping_address"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Notes</label>
            <el-input type="textarea" v-model="purchase_order.notes" :autosize="{ minRows: 3 }"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Shipping Total
            </label>
            <el-input placeholder="Please input" v-model="purchase_order.shipping_total"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Adjustment Total
            </label>
            <el-input placeholder="Please input" v-model="purchase_order.adjustment_total"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Items Total
            </label>
            <el-input placeholder="Please input" :value="itemsTotal" disabled></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Total
            </label>
            <el-input placeholder="Please input" :value="total" disabled></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <order-items-select v-model="purchase_order.purchase_order_items" />
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'PurchaseOrders' }" class="btn btn-default btn-fill">Cancel</router-link>
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="createPurchaseOrder">
          Create PurchaseOrder
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import OrderItemsSelect from '../Orders/OrderItemsSelect'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      LTable,
      OrderItemsSelect
    },
    data () {
      return {
        purchase_order: {
          shipping_total: 0,
          adjustment_total: 0,
          purchase_order_items: []
        }
      }
    },
    computed: {
      ...mapGetters({
        products: 'products/allProducts',
        suppliers: 'suppliers/allSuppliers'
      }),
      itemsTotal(){
        return this.purchase_order.purchase_order_items.reduce(((sum, item) => item.price * item.quantity + sum), 0)
      },
      total(){
        return this.itemsTotal + parseInt(this.purchase_order.shipping_total) + parseInt(this.purchase_order.adjustment_total)
      },
      hasSelectedItems() {
        return this.purchase_order.purchase_order_items.length > 0
      },
      hasSupplier(){
        return !!this.purchase_order.supplier_id
      },
      isValid(){
        return this.hasSupplier && this.hasPurchaseOrderItems
      }

    },
    methods: {
      createPurchaseOrder () {
        if(!this.hasSupplier){
          return this.notify("Please select a supplier")
        }
        if(!this.hasSelectedItems){
          return this.notify("Please add at least one product")
        }
        this.$store.dispatch('purchase_orders/createPurchaseOrder', this.purchase_order).then(() => {
          this.$router.push({ name: 'PurchaseOrders' });
        })
      },
      addItem() {
        let product = this.products.find(product => product.id == this.addingItem.product_id)
        if(!product) return
        this.addingItem.price = product.price
        let existingItem = this.purchase_order.purchase_order_items.find(item => item.product_id == this.addingItem.product_id)
        if(existingItem) {
          existingItem.quantity += parseInt(this.addingItem.quantity)
        } else {
          this.purchase_order.purchase_order_items.push(this.addingItem)
        }
        this.addingItem = { product_id: '', quantity: 1, price: 0 }
      },
      removeItem(productId) {
        this.purchase_order.purchase_order_items = this.purchase_order.purchase_order_items.filter(item => item.product_id != productId);
      },
      // TODO move to plugin
      notify(message) {
        let notification = {
          template: `<span><b>${message}</b></span>`
        }
        this.$notifications.notify(
          {
            component: notification,
            icon: 'el-icon-warning',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          })
      }
    },
    created () {
      this.$store.dispatch('suppliers/getAllSuppliers')
      this.$store.dispatch('purchase_orders/getAllPurchaseOrders')
    }
  }

</script>
<style>
  .el-select {
    width: 100%;
  }
</style>