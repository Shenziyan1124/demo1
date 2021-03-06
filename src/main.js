import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './utils/axios'
import store from './store/index'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
