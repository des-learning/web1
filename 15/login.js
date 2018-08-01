const Login = {
  template: `
  <form>
    <div>
      <label>Username:</label>
      <input type="text" v-model="username">
    </div>
    <div>
      <button @click="login">Login</button>
    </div>
  </form>
  `,
  data: function() {
    return {
      username: ''
    }
  },
  methods: {
    login: function() {
      this.$store.dispatch('login', {username: this.username})
      if (this.$store.getters.isLoggedIn) {
        this.$router.push('/')
      }
    }
  }
}
