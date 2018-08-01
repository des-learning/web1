const routes = [
  {name: 'login', component: Login, path: '/login'},
  {name: 'todoList', component: TodoList, path: '/todo'},
  {name: 'logout', component: Logout, path: '/logout'}
]
const router = new VueRouter({routes})
