<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <h4 slot="header" class="card-title">Edit Supplier</h4>
            <supplier-form :supplier="supplier"/>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/UIComponents/Cards/Card.vue'
  import SupplierForm from './SupplierForm.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Card,
      SupplierForm
    },
    computed: {
      ...mapGetters({
        supplier: 'suppliers/supplier'
      }),
      supplierId () {
        return this.$route.params.supplierId
      }
    },
    mounted () {
      this.$store.dispatch('suppliers/getSupplier', this.supplierId)
    }
  }
</script>
