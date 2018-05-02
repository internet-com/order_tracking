<template>
    <form>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Name
            </label>
            <el-input placeholder="Please input" v-model="supplier.name"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Phone Number
            </label>
            <el-input placeholder="Please input" v-model="supplier.phone_number"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Address
            </label>
            <el-input placeholder="Please input" v-model="supplier.address"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              External Link
            </label>
            <el-input placeholder="Please input" v-model="supplier.external_urls"></el-input>
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'Suppliers' }" class="btn btn-default btn-fill">Cancel</router-link>
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="submit">{{ submitButtonLabel }}</button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  export default {
    props: {
      supplier: Object
    },
    computed: {
      isEditForm () {
        return !!this.supplier.id
      },
      actionName () {
        return this.isEditForm ? 'suppliers/updateSupplier' : 'suppliers/createSupplier'
      },
      submitButtonLabel () {
        return this.isEditForm ? 'Update Supplier' : 'Create Supplier'
      }
    },
    methods: {
      submit () {
        let successMessage = this.isEditForm ? 'Supplier has been updated successfully' : 'Supplier has been created successfully'
        this.$store.dispatch(this.actionName, this.supplier).then(() => {
          this.$router.push({ name: 'Suppliers' })
          this.$customNotify(successMessage, 'success')
        }).catch(errorMessages => {
          errorMessages.forEach(message => this.$customNotify(message, 'danger'))
        })
      }
    }
  }
</script>
