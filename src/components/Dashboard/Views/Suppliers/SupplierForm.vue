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
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="createSupplier">
          Create Supplier
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  export default {
    data () {
      return {
        supplier: {
          name: '',
          phone_number: '',
          address: '',
          external_urls: '',
        }
      }
    },
    methods: {
      createSupplier () {
        this.$store.dispatch('suppliers/createSupplier', this.supplier).then(supplier => {
          this.$router.push({ name: 'Suppliers' });
          let successMessage = `Supplier ${supplier.name} has been created!`
          this.$customNotify(successMessage, 'success')
        }).catch(errorMessages => {
          errorMessages.forEach(message => this.$customNotify(message, 'danger'))
        })
      }
    },
    created () {
      this.$store.dispatch('suppliers/getAllSuppliers')
    }
  }

</script>
<style>
