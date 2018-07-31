    // routes
    const routes = [{name: 'home', path: '/', component: Home},
                    {name: 'add_new', path: '/new', component: AddNewContact},
                    {name: 'edit', path: '/:id', component: EditContact}]
    const router = new VueRouter({ routes })
