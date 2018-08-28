// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../node_modules/vue-awesome/icons/regular/minus-square'
import '../node_modules/vue-awesome/icons/chart-line'
import '../node_modules/vue-awesome/icons/regular/plus-square'
import Icon from '../node_modules/vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    Icon
  },
  template: '<App/>'
})
