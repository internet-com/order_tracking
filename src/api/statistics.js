import Vue from 'vue'

export default {
  getStatistics() {
    return Vue.axios.get('statistics')
  },
}