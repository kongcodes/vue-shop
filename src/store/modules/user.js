const state = {
  username:''
}
const getters = {}
const actions = {}
const mutations = {
  setUser (state, user) {
    state.username = user.username
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}