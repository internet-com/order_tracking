<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/products">
        <i class="nc-icon nc-atom"></i>
        <p>Products</p>
      </sidebar-link>
      <sidebar-link to="/admin/orders">
        <i class="nc-icon nc-notes"></i>
        <p>Orders</p>
      </sidebar-link>
      <sidebar-link to="/admin/customers">
        <i class="nc-icon nc-circle-09"></i>
        <p>Customers</p>
      </sidebar-link>
      <sidebar-link to="/admin/purchase_orders">
        <i class="nc-icon nc-cart-simple"></i>
        <p>Purchase Orders</p>
      </sidebar-link>
      <sidebar-link to="/admin/suppliers">
        <i class="nc-icon nc-delivery-fast"></i>
        <p>Suppliers</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>Shop's Settings</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
