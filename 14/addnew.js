const AddNewContact = {
  template: `
  <div>
    <h1>Add new contact</h1>
    <form>
      <div>
        <label>Nama:</label>
        <input type="text" v-model="contact.nama">
      </div>
      <div>
        <label>Alamat:</label>
        <input type="text" v-model="contact.alamat">
      </div>
      <div>
        <button @click="simpan">Simpan</button>
        <button @click="cancel">Batal</button>
      </div>
    </form>
  </div>
  `,
  data: () => {
    return {
      contact: { nama: '', alamat: '' }
    }
  },
  methods: {
    simpan: function () {
      this.$store.dispatch('addContact', this.contact)
      this.$router.push({name: 'home'})
    },
    cancel: function () {
      this.$router.push({name: 'home'})
    }
  }
}
