    // state
    const store = new Vuex.Store({
      state: {
        contacts: [{id: 0, nama: 'Budi', alamat: 'Jl. Thamrin'},
                   {id: 1, nama: 'Susi', alamat: 'Jl. Pandu'},
                   {id: 2, nama: 'Rudi', alamat: 'Jl. Thamrin'}],
        sequence: 3
      },
      getters: {
        allContacts: (state) => state.contacts,
        contactsByAlamat: (state) => (alamat) =>
            state.contacts.filter(x => x.alamat.includes(alamat)),
        contactById: (state) => (id) => {
          const contacts = state.contacts.filter(x => x.id === id)
          return contacts.length === 1 ? contacts[0] : null
        }
      },
      mutations: {
        addContact: (state, contact) => {
          state.contacts.push(Object.assign(contact, {id: state.sequence}))
          state.sequence++
        },
        deleteContact: (state, contact) => {
          state.contacts = state.contacts.filter(x => x.id !== contact.id)
        },
        updateContact: (state, {id: id, contact: contact}) => {
          var index = state.contacts.findIndex(x => x.id === id)
          if (index >= 0) {
            state.contacts[index].nama = contact.nama
            state.contacts[index].alamat = contact.alamat
          }
        }
      },
      actions: {
        addContact: (context, contact) => context.commit('addContact', contact),
        deleteContact: (context, contact) => context.commit('deleteContact', contact),
        updateContact: (context, options) => context.commit('updateContact', options)
      }
    })

