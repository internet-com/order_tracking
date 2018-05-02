<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Suppliers</h4>
              <p class="card-category">List of all suppliers of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewSupplier' }" class="btn btn-fill btn-primary">Add new supplier</router-link>
              <table class="table table-hover table-striped">
                <thead>
                  <th v-for="column in tableColumns">{{ column }}</th>
                </thead>
                <tbody>
                <tr v-for="supplier in suppliers">
                  <td>{{ supplier.id }}</td>
                  <td>{{ supplier.name }}</td>
                  <td>{{ supplier.phone_number }}</td>
                  <td>{{ supplier.address }}</td>
                  <td>{{ supplier.external_urls }}</td>
                  <td class="actions">
                      <router-link :to="{ name: 'EditSupplier', params: { supplierId: supplier.id } }">
                        <el-button type="warning" icon="el-icon-edit" circle></el-button>
                      </router-link>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(supplier)"></el-button>
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

  const tableColumns = ['Id', 'Name', 'Phong Number', 'Address', 'External Urls', 'Actions']

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
        suppliers: 'suppliers/allSuppliers'
      })
    },
    methods: {
      remove (supplier) {
        this.$confirm('Are you sure to delete this supplier?').then(() => {
          this.$store.dispatch('suppliers/deleteSupplier', supplier).then((supplier) => {
            this.$customNotify('Supplier has been deleted successfully')
          }).catch((errorMessages) => {
            this.$customNotify('Supplier has been linked to some order/purchase orders. Please remove them first! Consider to use hiding supplier feature instead of removing.', 'danger')
          })
        })
      }
    },
    created () {
      this.$store.dispatch('suppliers/getAllSuppliers')
    }
  }
</script>
