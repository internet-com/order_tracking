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
              Unit
            </label>
            <div>
              <el-select v-model="customer.unit" placeholder="Unit">
                <el-option
                  v-for="item in unitOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Price
            </label>
            <el-input placeholder="Please input" v-model="customer.price"></el-input>
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
        <div class="col-md-12">
          <div class="form-group">
            <label>Description</label>
            <el-input type="textarea" v-model="customer.description" :autosize="{ minRows: 3 }"></el-input>
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
  // mock unitOptions
  const unitOptions = [
    {
      value: '1',
      label: 'Bo'
    },
    {
      value: '2',
      label: 'Cai'
    },
    {
      value: '3',
      label: 'Chiec'
    },
    {
      value: '4',
      label: 'Doi'
    }
  ]
  export default {
    data () {
      return {
        customer: {
          name: '',
          unit: '',
          price: '',
          description: '',
          external_urls: '',
        },
        unitOptions,
      }
    },
    methods: {
      createCustomer () {
        this.$store.dispatch('customers/createCustomer', this.customer).then(() => {
          this.$router.push({ name: 'Customers' });
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
