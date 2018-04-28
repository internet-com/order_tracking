<template>
    <form>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Name
            </label>
            <el-input placeholder="Please input" v-model="customer.name"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Phone Number
            </label>
            <el-input placeholder="Please input" v-model="customer.phone_number"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Address
            </label>
            <el-input placeholder="Please input" v-model="customer.address"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              External Link
            </label>
            <el-input placeholder="Please input" v-model="customer.external_urls"></el-input>
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'Customers' }" class="btn btn-default btn-fill">Cancel</router-link>
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="createCustomer">
          Create Customer
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  export default {
    data () {
      return {
        customer: {
          name: '',
          phone_number: '',
          address: '',
          external_urls: '',
        }
      }
    },
    methods: {
      createCustomer () {
        this.$store.dispatch('customers/createCustomer', this.customer).then(customer => {
          this.$router.push({ name: 'Customers' });
          let successMessage = `Customer ${customer.name} has been created!`
          this.$customNotify(successMessage, 'success')
        }).catch(errorMessages => {
          errorMessages.forEach(message => this.$customNotify(message, 'danger'))
        })
      }
    },
    created () {
      this.$store.dispatch('customers/getAllCustomers')
    }
  }

</script>
<style>
  .el-select {
    width: 100%;
  }
</style>
