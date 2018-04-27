export default {
  install(Vue) {
    Vue.prototype.$customNotify = function (message, type='info') {
      let component = {
        template: `<span><b>${message}</b></span>`
      }
      let icon = (type == 'success') ? 'el-icon-success' : 'el-icon-warning'
      this.$notifications.notify({
        horizontalAlign: 'center',
        verticalAlign: 'top',
        component,
        icon,
        type
      })
    }
  }
}