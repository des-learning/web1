const store = new Vuex.Store({
  state: {
    username: ''
  },
  getters: {
    username: (state) => state.username,
    isLoggedIn: (state) => state.username !== ''
  },
  mutations: {
    login: (state, {username: username}) => {
      state.username = username
    },
    logout: (state) => { state.username = '' }
  },
  actions: {
    login: (context, {username: username}) => {
      context.commit('login', {username: username})
    },
    logout: (context) => {
      context.commit('logout')
    }
  }
})
