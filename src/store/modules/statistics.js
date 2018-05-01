import StatisticsAPI from '@/api/statistics'

// initial state
const state = {
  statistics: {}
}

// getters
const getters = {
  statistics: state => state.statistics,
}

// actions
const actions = {
  getStatistics({ commit }) {
    StatisticsAPI.getStatistics().then(response => {
      let statistics = response.data
      commit('setStatistics', statistics)
    })
  }
}

// mutations
const mutations = {
  setStatistics (state, statistics) {
    state.statistics = statistics
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}