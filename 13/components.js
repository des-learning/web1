Vue.component('my-table', {
  props: ['columns', 'rows'],
  template:
    '<table>\
      <tr>\
        <td v-for="column in columns">{{column}}</td>\
      </tr>\
      <tr v-for="row in rows">\
        <td v-for="column in columns">{{row[column]}}</td>\
      </tr>\
     </table>'
})
