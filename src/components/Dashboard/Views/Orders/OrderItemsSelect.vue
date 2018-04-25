<template>
	<div>
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
</template>

<script>
  import { mapGetters } from 'vuex'

  const tableColumns = ['Name', 'Price', 'Quantity', 'Total', 'Action']

	export default {
		props: ["value"],
		data () {
			return {
				order_items: [],
        addingItem: {
          product_id: '',
          price: 0,
          quantity: 1
        },
        tableColumns
			}
		},
		watch: {
			value(){
				this.order_items = this.value.slice(0) // clone value
			}
		},
		computed: {
      ...mapGetters({
        products: 'products/allProducts'
      }),
      formattedOrderItems(){
        return this.order_items.map((item) => {
          let product = this.products.find(product => product.id == item.product_id)
          let total = product ? product.price * item.quantity : 0
          return {
            product,
            total,
            quantity: item.quantity
          }
        })
      },
      hasSelectedItems() {
        return this.order_items.length > 0
      },
		},
    methods: {
      addItem() {
        let product = this.products.find(product => product.id == this.addingItem.product_id)
        if(!product) return
        this.addingItem.price = product.price
        let existingItem = this.order_items.find(item => item.product_id == this.addingItem.product_id)
        if(existingItem) {
          existingItem.quantity += parseInt(this.addingItem.quantity)
        } else {
          this.order_items.push(this.addingItem)
        }
        this.addingItem = { product_id: '', quantity: 1, price: 0 }
        this.update()
      },
      removeItem(productId) {
        this.order_items = this.order_items.filter(item => item.product_id != productId);
        this.update()
      },
      update() {
	      this.$emit('input', this.order_items)
	    }
    },
    created () {
      this.order_items = this.value.slice(0)
      this.$store.dispatch('products/getAllProducts')
    }
	}
</script>