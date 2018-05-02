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
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="submit">{{ submitButtonLabel }}</button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  // mock unitOptions
  const unitOptions = [
    {
      value: 'Bo',
      label: 'Bo'
    },
    {
      value: 'Cai',
      label: 'Cai'
    },
    {
      value: 'Chiec',
      label: 'Chiec'
    },
    {
      value: 'Doi',
      label: 'Doi'
    }
  ]
  export default {
    props: {
      product: Object
    },
    data () {
      return {
        unitOptions
      }
    },
    computed: {
      isEditForm () {
        return !!this.product.id
      },
      actionName () {
        return this.isEditForm ? 'products/updateProduct' : 'products/createProduct'
      },
      submitButtonLabel () {
        return this.isEditForm ? 'Update Product' : 'Create Product'
      }
    },
    methods: {
      submit () {
        let successMessage = this.isEditForm ? 'Product has been updated successfully' : 'Product has been created successfully'
        this.$store.dispatch(this.actionName, this.product).then(() => {
          this.$router.push({ name: 'Products' })
          this.$customNotify(successMessage, 'success')
        }).catch(errorMessages => {
          errorMessages.forEach(message => this.$customNotify(message, 'danger'))
        })
      }
    }
  }

</script>
