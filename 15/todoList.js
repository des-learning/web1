const TodoList = {
  template: `
  <div>
    <h1>Todo List</h1>
    <table>
      <button @click="refresh">Refresh</button>
      <tr><th>Description</th><th>Status</th></tr>
      <tr v-for="todo in todos">
        <td>{{todo.description}}</td>
        <td>{{todo.finished ? 'Finished' : 'Unfinished'}}</td>
      </tr>
    </table>
  </div>
  `,
  data: function() {
    return {
      todos: []
    }
  },
  methods: {
    refresh: function () {
      this.$store.dispatch('todoList')
          .then(response => response.json())
          .then(json => { this.todos = json })
          .catch(err => alert(error))
    }
  },
  mounted() {
    this.refresh()
  }
}
