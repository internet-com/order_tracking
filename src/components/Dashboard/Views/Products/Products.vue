<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Products</h4>
              <p class="card-category">List of all products of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewProduct' }" class="btn btn-fill btn-primary">Add new product</router-link>
              <table class="table table-hover table-striped">
                <thead>
                  <th v-for="column in tableColumns">{{ column }}</th>
                </thead>
                <tbody>
                <tr v-for="product in products">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.unit }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.description }}</td>
                  <td>{{ product.external_urls }}</td>
                  <td>{{ product.count }}</td>
                  <td>{{ product.forecast_count }}</td>
                  <td>
                      <router-link :to="{ name: 'EditProduct', params: { productId: product.id } }">
                        <el-button type="warning" icon="el-icon-edit" circle></el-button>
                      </router-link>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(product)"></el-button>
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
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import { mapGetters } from 'vuex'

  const tableColumns = [
    "Id",
    'Name',
    'Unit',
    'Price',
    'Description',
    'External Urls',
    'Remaining',
    'Forecast',
    'Actions'
  ]
  export default {
    components: {
      LTable,
      Card
    },
    data() {
      return {
        tableColumns
      }
    },
    computed: {
      ...mapGetters({
        products: 'products/allProducts'
      })
    },
    methods: {
      remove(product) {
        this.$confirm('Are you sure to delete this product?').then(() => {
          this.$store.dispatch('products/deleteProduct', product).then((product) => {
            this.$customNotify("Product has been deleted successfully")
          }).catch((errorMessages) => {
            this.$customNotify("Product has been linked to some order/purchase orders. Please remove them first! Consider to use hiding product feature instead of removing.", 'danger')
          })
        })
      }
    },
    created () {
      this.$store.dispatch('products/getAllProducts')
    }
  }
</script>
<style>
</style>
