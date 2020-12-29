//价格
import Vue from 'vue'
import filterPrice from './filterPrice'
Vue.filter("filterPrice", filterPrice)

//时间
import filterTime from './filterTime'
Vue.filter('filterTime', filterTime)
