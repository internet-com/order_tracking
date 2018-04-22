<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Products</h4>
              <p class="card-category">List of all products of the shop</p>
            </template>
            <div class="table-responsive">
              <router-link :to="{ name: 'NewProduct' }" class="btn btn-fill btn-primary">Add new product</router-link>
              <l-table class="table-hover table-striped"
                       :columns="table.columns"
                       :data="table.data">
              </l-table>
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
  const tableColumns = {
    id: "Id",
    name: 'Name',
    unit: 'Unit',
    price: 'Price',
    description: 'Description',
    external_urls: 'External Urls'
  }
  const products = [
    {
      id: 1,
      name: 'Test product',
      unit: 'cai',
      price: '10000',
      description: 'hang xuat du',
      external_urls: 'www.facebook.com',
    }
  ]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table: {
          columns: tableColumns,
          data: [...products]
        }
      }
    }
  }
</script>
<style>
</style>
