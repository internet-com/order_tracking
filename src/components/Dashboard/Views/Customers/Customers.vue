<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Customers</h4>
              <p class="card-category">List of all customers of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewCustomer' }" class="btn btn-fill btn-primary">Add new customer</router-link>
              <table class="table table-hover table-striped">
                <thead>
                  <th v-for="column in tableColumns">{{ column }}</th>
                </thead>
                <tbody>
                <tr v-for="customer in customers">
                  <td>{{ customer.id }}</td>
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.phone_number }}</td>
                  <td>{{ customer.address }}</td>
                  <td>{{ customer.external_urls }}</td>
                  <td class="actions">
                      <router-link :to="{ name: 'EditCustomer', params: { customerId: customer.id } }">
                        <el-button type="warning" icon="el-icon-edit" circle></el-button>
                      </router-link>
                      <el-button type="danger" icon="el-icon-delete" circle @click="remove(customer)"></el-button>
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
        customers: 'customers/allCustomers'
      })
    },
    methods: {
      remove(customer) {
        this.$confirm('Are you sure to delete this customer?').then(() => {
          this.$store.dispatch('customers/deleteCustomer', customer).then((customer) => {
            this.$customNotify("Customer has been deleted successfully")
          }).catch((errorMessages) => {
            this.$customNotify("Customer has been linked to some order/purchase orders. Please remove them first! Consider to use hiding customer feature instead of removing.", 'danger')
          })
        })
      }
    },
    created () {
      this.$store.dispatch('customers/getAllCustomers')
    }
  }
</script>
