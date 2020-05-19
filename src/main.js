import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBreadcrumbs from 'vue-2-breadcrumbs'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueBreadcrumbs,
  render: h => h(App)
}).$mount('#app')
