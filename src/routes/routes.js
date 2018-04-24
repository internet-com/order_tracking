import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Products from 'src/components/Dashboard/Views/Products/Products.vue'
import NewProduct from 'src/components/Dashboard/Views/Products/NewProduct.vue'
import Orders from 'src/components/Dashboard/Views/Orders/Orders.vue'
import NewOrder from 'src/components/Dashboard/Views/Orders/NewOrder.vue'
import PurchaseOrders from 'src/components/Dashboard/Views/PurchaseOrders/PurchaseOrders.vue'
import NewPurchaseOrder from 'src/components/Dashboard/Views/PurchaseOrders/NewPurchaseOrder.vue'
import Suppliers from 'src/components/Dashboard/Views/Suppliers/Suppliers.vue'
import NewSupplier from 'src/components/Dashboard/Views/Suppliers/NewSupplier.vue'
import Customers from 'src/components/Dashboard/Views/Customers/Customers.vue'
import NewCustomer from 'src/components/Dashboard/Views/Customers/NewCustomer.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'products/new',
        name: 'NewProduct',
        component: NewProduct
      },
      {
        path: 'customers',
        name: 'Customers',
        component: Customers
      },
      {
        path: 'customers/new',
        name: 'NewCustomer',
        component: NewCustomer
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders
      },
      {
        path: 'orders/new',
        name: 'NewOrder',
        component: NewOrder
      },
      {
        path: 'purchase_orders',
        name: 'PurchaseOrders',
        component: PurchaseOrders
      },
      {
        path: 'purchase_orders/new',
        name: 'NewPurchaseOrder',
        component: NewPurchaseOrder
      },
      {
        path: 'suppliers',
        name: 'Suppliers',
        component: Suppliers
      },
      {
        path: 'suppliers/new',
        name: 'NewSupplier',
        component: NewSupplier
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
