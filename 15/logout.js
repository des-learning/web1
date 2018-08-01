const Logout = {
  template: ``,
  mounted() {
    this.$store.dispatch('logout')
    this.$router.replace({name: 'login'})
  }
}
