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
            state.contacts.filter(x => x.alamat.includes(alamat))
      },
      mutations: {
        addContact: (state, contact) => {
          state.contacts.push(Object.assign(contact, {id: state.sequence}))
          state.sequence++
        }
      },
      actions: {
        addContact: (context, contact) => context.commit('addContact', contact)
      }
    })

