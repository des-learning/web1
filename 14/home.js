    const Home = {
      template: `
      <div>
        <h1>Contacts</h1>
        <input type="text" v-model="alamat" placeholder="Filter by alamat">
        <table>
          <tr><th>Nama</th><th>Alamat</th></tr>
          <tr v-for="contact in contacts" v-key="contact.id">
            <td>{{contact.nama}}</td><td>{{contact.alamat}}</td>
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
      }
    }

