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
            <div>
              <label>Choose a product</label>
              <div class="row">
                <div class="col-md-6">
                  <el-select v-model="addingItem.product_id" filterable placeholder="Product">
                    <el-option
                      v-for="product in products"
                      :key="product.id"
                      :label="product.name"
                      :value="product.id">
                    </el-option>
                  </el-select>
                </div>
                <div class="col-md-2">
                  <el-input placeholder="Quantity" v-model="addingItem.quantity"></el-input>
                </div>
                <div class="col-md-2">
                  <el-button type="primary" icon="el-icon-plus" @click="addItem">Add</el-button>
                </div>
              </div>
            </div>
            <div style="margin-top: 10px">
              <label>Selected products</label>
              <div  v-if="hasSelectedItems" class="table-responsive">
                <table class="table">
                  <thead>
                    <th v-for="column in tableColumns">{{ column }}</th>
                  </thead>
                  <tbody>
                    <tr v-for="orderItem in formattedOrderItems" v-if="orderItem.product">
                      <td>{{ orderItem.product.name }}</td>
                      <td>{{ orderItem.product.price }}</td>
                      <td>{{ orderItem.quantity }}</td>
                      <td>{{ orderItem.total }}</td>
                      <td>
                        <el-button type="primary" icon="el-icon-edit" size="mini" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="removeItem(orderItem.product.id)"></el-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else>
                <p class="text-danger">No item selected. Please select at least one!</p>
              </div>
            </div>
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
  import { mapGetters } from 'vuex'
  import LTable from 'src/components/UIComponents/Table.vue'
  // mock unitOptions
  const customers = [
    {
      id: 1,
      name: 'Linh Nguyen',
      phone_number: '01656110787',
      address: 'Ha Noi'
    },
    {
      id: 2,
      name: 'Ngoc Anh',
      phone_number: '016549589065',
      address: 'Ha Noi'
    },
    {
      id: 3,
      name: 'Minh Ngoc',
      phone_number: '0123456789',
      address: 'Hai Phong'
    },
  ]
  const tableColumns = ['Name', 'Price', 'Quantity', 'Total', 'Action']
  export default {
    components: {
      LTable
    },
    data () {
      return {
        order: {
          shipping_total: 0,
          adjustment_total: 0,
          orderItems: []
        },
        addingItem: {
          product_id: '',
          quantity: 1
        },
        customers,
        tableColumns
      }
    },
    computed: {
      ...mapGetters({
        products: 'products/allProducts'
      }),
      hasSelectedItems() {
        return this.order.orderItems.length > 0
      },
      formattedOrderItems(){
        return this.order.orderItems.map((item) => {
          let product = this.products.find(product => product.id == item.product_id)
          let total = product ? product.price * item.quantity : 0
          return {
            product,
            total,
            quantity: item.quantity
          }
        })
      },
      itemsTotal(){
        return this.formattedOrderItems.reduce(((sum, item) => item.total + sum), 0)
      },
      total(){
        return this.itemsTotal + parseInt(this.order.shipping_total) + parseInt(this.order.adjustment_total)
      }
    },
    methods: {
      createOrder () {
        this.$store.dispatch('orders/createOrder', this.order).then(() => {
          this.$router.push({ name: 'Products' });
        })
      },
      addItem() {
        if(!this.addingItem.product_id) return
        let existingItem = this.order.orderItems.find(item => item.product_id == this.addingItem.product_id)
        if(existingItem) {
          existingItem.quantity += parseInt(this.addingItem.quantity)
        } else {
          this.order.orderItems.push(this.addingItem)
        }
        this.addingItem = { product_id: '', quantity: 1}
      },
      removeItem(productId) {
        this.order.orderItems = this.order.orderItems.filter(item => item.product_id != productId);
      }
    },
    created () {
      this.$store.dispatch('products/getAllProducts')
    }
  }

</script>
<style>
  .el-select {
    width: 100%;
  }
</style>
