const NewTodo = {
  template: `
  <div>
    <h1>New Todo</h1>
    <form>
      <div>
        <label>Description</label>
        <input type="text" v-model="description">
      </div>
      <div>
        <button @click="simpan">Simpan</button>
      </div>
    </form>
  </div>
  `,
  data: function () {
    return {
      description: ''
    }
  },
  methods: {
    simpan: function () {
      this.$store.dispatch('newTodo', {description: this.description})
        .then(response => response.json())
        .then(json => { this.$router.replace({name: 'todoList'}) })
        .catch(err => { alert(err) })
    }
  }
}
