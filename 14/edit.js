const EditContact = {
  template: `
  <div>
    <h1>Edit Contact</h1>
    <form v-if="oldContact !== null">
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
    <h1 v-else>Contact tidak ditemukan!</h1>
  </div>
  `,
  data: () => {
    return {
      contact: { id: -1, nama: '', alamat: '' }
    }
  },
  computed: {
    oldContact: function () {
      return this.$store.getters.contactById(this.$route.params.id)
    }
  },
  methods: {
    simpan: function () {
      this.$store.dispatch('updateContact', {id: this.$route.params.id, contact: this.contact})
      this.$router.push({name: 'home'})
    },
    cancel: function () {
      this.$router.push({name: 'home'})
    }
  },
  mounted () {
    if (this.oldContact !== null) {
      this.contact = {id: this.oldContact.id,
        nama: this.oldContact.nama,
        alamat: this.oldContact.alamat}
    }
  }
}
