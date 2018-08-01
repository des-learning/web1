const TodoList = {
  template: `
  <div>
    <h1>Todo List</h1>
    <button @click="refresh">Refresh</button>
    <div>
      <button @click="allTodos">All Todo(s)</button>
      <button @click="finishedTodos">Finished Todo(s)</button>
      <button @click="unfinishedTodos">Unfinished Todo(s)</button>
    </div>
    <table>
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
      todos: [],
      finished: null,
    }
  },
  computed: {
    filteredTodos: function () {
      if (this.finished === null)
        return this.todos
      else
        return this.todos.filter(todo => todo.finished === this.finished)
    }
  },
  methods: {
    refresh: function () {
      this.$store.dispatch('todoList')
          .then(response => response.json())
          .then(json => { this.todos = json })
          .catch(err => alert(error))
    },
    allTodos: function () { this.finished = null },
    finishedTodos: function () { this.finished = true },
    unfinishedTodos: function () { this.finished = false }
  },
  mounted() {
    this.refresh()
  }
}
