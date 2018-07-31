    const Home = {
      template: `
      <div>
        <h1>Contacts</h1>
        <input type="text" v-model="alamat" placeholder="Filter by alamat">
        <table>
          <tr><th>Nama</th><th>Alamat</th><th>Action</th></tr>
          <tr v-for="contact in contacts" v-key="contact.id">
            <td>{{contact.nama}}</td><td>{{contact.alamat}}</td>
            <td>
              <button @click="hapus(contact)">Hapus</button>
              <button @click="edit(contact)">Edit</button>
            </td>
          </tr>
        </table>
      </div>
      `,
      data: () => {
        return {
          alamat: ''
        }
      },
      computed: {
        contacts: function() {
          if (this.alamat === '')
            return this.$store.getters.allContacts
          else
            return this.$store.getters.contactsByAlamat(this.alamat)
        }
      },
      methods: {
        hapus: function(contact) {
          const yakin = confirm("Hapus contact " + contact.nama + "?")
          if (yakin) {
            this.$store.dispatch('deleteContact', contact)
          }
        },
        edit: function(contact) {
          const id = contact.id
          this.$router.push({name: 'edit', params: {id: id}})
        }
      }
    }

