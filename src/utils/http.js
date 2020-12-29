import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
import router from '../router'
import qs from 'qs'
let baseUrl = '/api'
Vue.prototype.$pre = ' http://localhost:3000'

//请求头
// axios.interceptors.request.use(req=>{
//   if(req.url!=baseUrl+'/api/login'&&req.url!=baseUrl+'/api/register'){
//     req.headers.authorization=JSON.parse(localStorage.getItem('userInfo')).token
//   }
// })
//弹框信息
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    Toast(res.data.msg)
  }
  if (res.data.msg == '登录已过期或访问权限受限') {
    router.push('/login')
  }
  return res
})
//登录接口
export let reqLogin = (user) => {
  return axios({
    url: baseUrl + '/api/login',
    method: 'post',
    data: qs.stringify(user)
  })
}
//注册
export let reqRegister = (user) => {
  return axios({
    url: baseUrl + '/api/register',
    method: 'post',
    data: qs.stringify(user)
  })
}
//轮播图
export let reqBanner = () => {
  return axios({
    url: baseUrl + '/api/bannerlist',
    method: 'get',
    headers: {
      authorization: JSON.parse(localStorage.getItem("userInfo")).token
    }
  })
}
//首页商品数据
export let reqHomeGoods = () => {
  return axios({
    url: baseUrl + '/api/getindexgoods',
    method: 'get'
  })
}
//详情
export let reqDetail = (id) => {
  return axios({
    url: baseUrl + '/api/getgoodsinfo',
    method: 'get',
    params: {
      id: id
    }
  })
}
//加入购物车
export let reqShopAdd = (obj) => {
  return axios({
    url: baseUrl + '/api/cartadd',
    method: 'post',
    data: obj,
    headers: {
      authorization: JSON.parse(localStorage.getItem("userInfo")).token
    }
  })
}
//分类
export let reqShopCate = () => {
  return axios({
    url: baseUrl + '/api/getcatetree',
    method: 'get',
    headers: {
      authorization: JSON.parse(localStorage.getItem("userInfo")).token
    }
  })
}
//分类列表
export let cateList = (fid) => {
  return axios({
    url: baseUrl + '/api/getgoods',
    method: 'get',
    params: {
      fid: fid
    },
    headers: {
      authorization: JSON.parse(localStorage.getItem("userInfo")).token
    }
  })
}
//购物车列表
export let reqShopList = () => {
  return axios({
    url: baseUrl + '/api/cartlist',
    method: 'get',
    params: {
      uid: JSON.parse(localStorage.getItem('userInfo')).uid
    },
    headers: {
      authorization: JSON.parse(localStorage.getItem("userInfo")).token
    }
  })
}
//购物车修改
export let reqShopDit = (obj) => {
  return axios({
    url: baseUrl + '/api/cartedit',
    method: 'post',
    data: obj,
    headers: {
      authorization: JSON.parse(localStorage.getItem("userInfo")).token
    }
  })
}
//购物车删除
export let reqShopDel = (id) => {
  return axios({
    url: baseUrl + '/api/cartdelete',
    method: 'post',
    data: {
      id: id
    },
    headers: {
      authorization: JSON.parse(localStorage.getItem("userInfo")).token
    }
  })
}
