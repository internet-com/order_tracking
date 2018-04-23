<template>
    <form>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Customer
            </label>
            <div>
              <el-select v-model="order.customer_id" filterable placeholder="Customer">
                <el-option
                  v-for="customer in customers"
                  :key="customer.id"
                  :label="customer.name"
                  :value="customer.id">
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
            <el-input placeholder="Please input" v-model="order.shipping_address"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Notes</label>
            <el-input type="textarea" v-model="order.notes" :autosize="{ minRows: 3 }"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Shipping Total
            </label>
            <el-input placeholder="Please input" v-model="order.shipping_total"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Adjustment Total
            </label>
            <el-input placeholder="Please input" v-model="order.adjustment_total"></el-input>
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
            <order-items-select v-model="order.order_items" />
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'Orders' }" class="btn btn-default btn-fill">Cancel</router-link>
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="createOrder">
          Create Order
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import OrderItemsSelect from './OrderItemsSelect'
  import customers from '@/api/mocks/customers'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      LTable,
      OrderItemsSelect
    },
    data () {
      return {
        order: {
          shipping_total: 0,
          adjustment_total: 0,
          order_items: []
        },
        customers
      }
    },
    computed: {
      ...mapGetters({
        products: 'products/allProducts'
      }),
      itemsTotal(){
        return this.order.order_items.reduce(((sum, item) => item.price * item.quantity + sum), 0)
      },
      total(){
        return this.itemsTotal + parseInt(this.order.shipping_total) + parseInt(this.order.adjustment_total)
      },
      hasSelectedItems() {
        return this.order.order_items.length > 0
      },
      hasCustomer(){
        return !!this.order.customer_id
      },
      isValid(){
        return this.hasCustomer && this.hasOrderItems
      }

    },
    methods: {
      createOrder () {
        if(!this.hasCustomer){
          return this.notify("Please select a customer")
        }
        if(!this.hasSelectedItems){
          return this.notify("Please add at least one product")
        }
        this.$store.dispatch('orders/createOrder', this.order).then(() => {
          this.$router.push({ name: 'Orders' });
        })
      },
      addItem() {
        let product = this.products.find(product => product.id == this.addingItem.product_id)
        if(!product) return
        this.addingItem.price = product.price
        let existingItem = this.order.order_items.find(item => item.product_id == this.addingItem.product_id)
        if(existingItem) {
          existingItem.quantity += parseInt(this.addingItem.quantity)
        } else {
          this.order.order_items.push(this.addingItem)
        }
        this.addingItem = { product_id: '', quantity: 1, price: 0 }
      },
      removeItem(productId) {
        this.order.order_items = this.order.order_items.filter(item => item.product_id != productId);
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
      this.$store.dispatch('orders/getAllOrders')
    }
  }

</script>
<style>
  .el-select {
    width: 100%;
  }
</style>