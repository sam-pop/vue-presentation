/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import router from './router'

// disable the console production tips
Vue.config.productionTip = false

// declare the new Vue app
new Vue({
  el: '#app', // element to bind to
  router, // use vue-router
  components: { App }, // app start at the App component
  template: '<App/>' // template tag
})
