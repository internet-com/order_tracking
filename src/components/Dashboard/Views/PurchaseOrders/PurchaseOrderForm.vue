<template>
    <form>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Supplier
            </label>
            <div>
              <el-select v-model="purchaseOrder.supplier_id" filterable placeholder="Supplier">
                <el-option
                  v-for="supplier in suppliers"
                  :key="supplier.id"
                  :label="supplier.name"
                  :value="supplier.id">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="col-md-12" v-if="isEditForm">
          <div class="form-group">
            <label class="control-label">
              Status
            </label>
            <div>
              <el-select v-model="purchaseOrder.state" placeholder="Status">
                <el-option
                  v-for="state in Object.keys(PurchaseOrderState)"
                  :key="state"
                  :label="PurchaseOrderState[state]"
                  :value="state">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Notes</label>
            <el-input type="textarea" v-model="purchaseOrder.notes" :autosize="{ minRows: 3 }"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Shipment Total
            </label>
            <el-input placeholder="Please input" v-model="purchaseOrder.shipment_total"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Adjustment Total
            </label>
            <el-input placeholder="Please input" v-model="purchaseOrder.adjustment_total"></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Items Total
            </label>
            <el-input placeholder="Please input" :value="itemsTotal" disabled></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Total
            </label>
            <el-input placeholder="Please input" :value="total" disabled></el-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <order-items-select v-model="purchaseOrder.purchase_order_items_attributes" />
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'PurchaseOrders' }" class="btn btn-default btn-fill">Cancel</router-link>
        <button type="submit" class="btn btn-primary btn-fill" @click.prevent="submit">{{ submitButtonLabel }}</button>
      </div>
      <div class="clearfix"></div>
    </form>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import OrderItemsSelect from 'src/components/Dashboard/Views/Orders/OrderItemsSelect'
  import { mapGetters } from 'vuex'
  import { PurchaseOrderState } from '@/settings/PurchaseOrders'

  export default {
    components: {
      LTable,
      OrderItemsSelect
    },
    props: {
      purchaseOrder: Object
    },
    data () {
      return {
        PurchaseOrderState
      }
    },
    computed: {
      ...mapGetters({
        products: 'products/allProducts',
        suppliers: 'suppliers/allSuppliers'
      }),
      itemsTotal () {
        return this.activePurchaseOrderItems.reduce((sum, item) => item.price * item.quantity + sum, 0)
      },
      total () {
        return this.itemsTotal + parseInt(this.purchaseOrder.shipment_total) + parseInt(this.purchaseOrder.adjustment_total)
      },
      activePurchaseOrderItems () {
        return this.purchaseOrder.purchase_order_items_attributes.filter(item => !item._destroy)
      },
      hasSelectedItems () {
        return this.activePurchaseOrderItems.length > 0
      },
      hasSupplier () {
        return !!this.purchaseOrder.supplier_id
      },
      isEditForm () {
        return !!this.purchaseOrder.id
      },
      actionName () {
        return this.isEditForm ? 'purchase_orders/updatePurchaseOrder' : 'purchase_orders/createPurchaseOrder'
      },
      submitButtonLabel () {
        return this.isEditForm ? 'Update PurchaseOrder' : 'Create PurchaseOrder'
      }
    },
    methods: {
      submit () {
        if (!this.hasSupplier) {
          return this.$customNotify('Please select a supplier', 'danger')
        }
        if (!this.hasSelectedItems) {
          return this.$customNotify('Please add at least one product', 'danger')
        }
        let successMessage = this.isEditForm ? 'PurchaseOrder has been updated successfully' : 'PurchaseOrder has been created successfully'
        this.$store.dispatch(this.actionName, this.purchaseOrder).then(() => {
          this.$router.push({ name: 'PurchaseOrders' })
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
