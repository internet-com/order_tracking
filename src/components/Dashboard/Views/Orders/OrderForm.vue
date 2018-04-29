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
        <div class="col-md-12" v-if="isEditForm">
          <div class="form-group">
            <label class="control-label">
              Status
            </label>
            <div>
              <el-select v-model="order.state" placeholder="Status">
                <el-option
                  v-for="state in Object.keys(OrderState)"
                  :key="state"
                  :label="OrderState[state]"
                  :value="state">
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
              Shipment Total
            </label>
            <el-input placeholder="Please input" v-model="order.shipment_total"></el-input>
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
            <order-items-select v-model="order.order_items_attributes" />
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'Orders' }" class="btn btn-default btn-fill">Cancel</router-link>
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="submit">{{ submitButtonLabel }}</button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import OrderItemsSelect from './OrderItemsSelect'
  import { mapGetters } from 'vuex'
  import { OrderState } from '@/settings/orders'

  export default {
    components: {
      LTable,
      OrderItemsSelect
    },
    props: {
      order: Object
    },
    data() {
      return {
        OrderState
      }
    },
    computed: {
      ...mapGetters({
        products: 'products/allProducts',
        customers: 'customers/allCustomers'
      }),
      itemsTotal(){
        return this.activeOrderItems.reduce(((sum, item) => item.price * item.quantity + sum), 0)
      },
      total(){
        return this.itemsTotal + parseInt(this.order.shipment_total) + parseInt(this.order.adjustment_total)
      },
      activeOrderItems() {
        return this.order.order_items_attributes.filter(item => !item._destroy)
      },
      hasSelectedItems() {
        return this.activeOrderItems.length > 0
      },
      hasCustomer(){
        return !!this.order.customer_id
      },
      isEditForm() {
        return !!this.order.id
      },
      actionName(){
        return this.isEditForm ? 'orders/updateOrder' : 'orders/createOrder'
      },
      submitButtonLabel() {
        return this.isEditForm ? 'Update Order' : 'Create Order'
      }
    },
    methods: {
      submit () {
        if(!this.hasCustomer){
          return this.$customNotify("Please select a customer", 'danger')
        }
        if(!this.hasSelectedItems){
          return this.$customNotify("Please add at least one product", 'danger')
        }
        let successMessage = this.isEditForm ? "Order has been updated successfully" : "Order has been created successfully"
        this.$store.dispatch(this.actionName, this.order).then(() => {
          this.$router.push({ name: 'Orders' });
          this.$customNotify(successMessage, 'success')
        })
      }
    },
    created () {
      this.$store.dispatch('customers/getAllCustomers')
      this.$store.dispatch('orders/getAllOrders')
    }
  }

</script>
