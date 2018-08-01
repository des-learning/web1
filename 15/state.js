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
    },
    todoList: (context) => {
      return fetch('http://178.128.222.9:8080/todo/' + context.state.username)
    },
    newTodo: (context, data) => {
      return fetch('http://178.128.222.9:8080/todo/' + context.state.username,
          {
            method: 'POST',
            body: JSON.stringify(data)
          })
    }
  }
})
