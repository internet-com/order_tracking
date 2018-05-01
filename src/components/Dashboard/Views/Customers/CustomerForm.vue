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
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="submit">{{ submitButtonLabel }}</button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  export default {
    props: {
      customer: Object
    },
    computed: {
      isEditForm() {
        return !!this.customer.id
      },
      actionName(){
        return this.isEditForm ? 'customers/updateCustomer' : 'customers/createCustomer'
      },
      submitButtonLabel() {
        return this.isEditForm ? 'Update Customer' : 'Create Customer'
      },
    },
    methods: {
      submit () {
        let successMessage = this.isEditForm ? "Customer has been updated successfully" : "Customer has been created successfully"
        this.$store.dispatch(this.actionName, this.customer).then(() => {
          this.$router.push({ name: 'Customers' });
          this.$customNotify(successMessage, 'success')
        }).catch(errorMessages => {
          errorMessages.forEach(message => this.$customNotify(message, 'danger'))
        })
      }
    }
  }
</script>
