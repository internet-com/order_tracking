<template>
    <form>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Name
            </label>
            <el-input placeholder="Please input" v-model="product.name"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Unit
            </label>
            <div>
              <el-select v-model="product.unit" placeholder="Unit">
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
            <el-input placeholder="Please input" v-model="product.price"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              External Link
            </label>
            <el-input placeholder="Please input" v-model="product.external_urls"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Description</label>
            <el-input type="textarea" v-model="product.description" :autosize="{ minRows: 3 }"></el-input>
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'Products' }" class="btn btn-default btn-fill">Cancel</router-link>
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="createProduct">
          Create Product
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
        product: {
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
      createProduct () {
        this.$store.dispatch('products/createProduct', this.product).then(() => {
          this.$router.push({ name: 'Products' });
        })
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
