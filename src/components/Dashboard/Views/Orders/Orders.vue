<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Orders</h4>
              <p class="card-category">List of all ordesr of the shop</p>
            </template>
            <div class="table-responsive">
              <button class="btn btn-fill btn-primary">Add new order</button>
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
  const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
  const orders = [
    {
      id: 1,
      name: 'Dakota Rice',
      salary: '$36.738',
      country: 'Niger',
      city: 'Oud-Turnhout'
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
          columns: [...tableColumns],
          data: [...orders]
        }
      }
    }
  }
</script>
<style>
</style>
