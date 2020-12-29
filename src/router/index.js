import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let login = () => import('../pages/login/login.vue')
let register = () => Promise.resolve(import('../pages/register/register.vue'))
let index=()=>Promise.resolve(import('../pages/index/index.vue'))
//二级路由
let home=()=>Promise.resolve(import('../pages/home/home.vue'))
let detail=()=>Promise.resolve(import('../pages/detail/detail.vue'))
let cate=()=>Promise.resolve(import('../pages/cate/cate.vue'))
let list=()=>Promise.resolve(import('../pages/list/lsit.vue'))
let shop=()=>Promise.resolve(import('../pages/shop/shop.vue'))
export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/register',
      name: '注册',
      component: register
    },
    //大首页
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'home',
          name:'首页',
          component:home,
        },
        {
          path:'cate',
          name:'分类',
          component:cate
        },
        {
          path:'shop',
          name:'购物车',
          component:shop
        },
        {
          path:'',
          redirect:'home'
        }
      ]
    },
    {
      path:'/detail',
      name:'详情',
      component:detail
    },
    {
      path:'/list',
      component:list
    },
    {
      path: "*",
      redirect: 'login'
    }
  ]
})
