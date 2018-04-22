<template>
    <form>
      <div class="row">
        <div class="col-md-12">
          <fg-input type="text"
                    label="Name"
                    placeholder="Name"
                    v-model="product.name">
          </fg-input>
        </div>
        <div class="col-md-12">
          <fg-input type="text"
                    label="Unit"
                    placeholder="Unit"
                    v-model="product.unit">
          </fg-input>
        </div>
        <div class="col-md-12">
          <fg-input type="text"
                    label="Price"
                    placeholder="Price"
                    v-model="product.price">
          </fg-input>
        </div>
        <div class="col-md-12">
          <fg-input type="text"
                    label="External Url"
                    placeholder="External Url"
                    v-model="product.external_urls">
          </fg-input>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Description</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Description"
                      v-model="product.description">
              </textarea>
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'Products' }" class="btn btn-default btn-fill">Cancel</router-link>
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="updateProduct">
          Update Product
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>

  export default {
    data () {
      return {
        product: {
          name: '',
          unit: '',
          price: '',
          description: '',
          external_urls: '',
        }
      }
    },
    methods: {
      updateProduct () {
        alert('Your data: ' + JSON.stringify(this.product))
      }
    }
  }

</script>
<style>

</style>
