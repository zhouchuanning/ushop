// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
//样式重置   rem.js
import './assets/css/reset.css'
import './assets/js/rem'
//动画
import 'animate.css'
//过滤器
import './filters'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
