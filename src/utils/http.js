import axios from 'axios'
import qs from "qs"
import Vue from 'vue'
import router from '../router'
import { erroralert } from './alert'
import store from '../store'
//开发环境使用 8080
let baseUrl = "/api"
Vue.prototype.$pre = "http://localhost:3000"

//生产环境使用 打包
// let baseUrl=""
// Vue.prototype.$pre=""

//响应拦截
axios.interceptors.response.use(res => {
    console.group('本次请求地址是：' + res.config.url)
    console.log(res)
    console.groupEnd()
    if (res.data.code !== 200) {
        erroralert(res.data.msg)
    }
    if (!res.data.list) {
        res.data.list = []
    }
    if (res.data.msg === '登录已过期或访问权限受限') {
        store.dispatch('changeUser', {})
        router.push('/login')
    }
    return res
})
axios.interceptors.request.use(config => {
    if (config.url !== baseUrl + "/api/userlogin") {
        config.headers.authorization = store.state.userInfo.token
    }
    return config
})

//带有文件参数转换
function dataToFromData(user) {
    let data = new FormData()
    for (let i in user) {
        data.append(i, user[i])
    }
    return data
}
//登录
export let reqLogin = (user) => {
    return axios({
        url: baseUrl + '/api/userlogin',
        method: 'post',
        data: qs.stringify(user)
    })
}
//菜单列表
export let reqMuneList = () => {
    return axios({
        url: baseUrl + '/api/menulist',
        method: 'get',
        params: {
            istree: true
        }
    })
}
// 菜单添加
export let reqMuneAdd = (user) => {
    return axios({
        url: baseUrl + '/api/menuadd',
        method: 'post',
        data: qs.stringify(user)
    })
}

//菜单修改
export let reqMuneEdit = (user) => {
    return axios({
        url: baseUrl + '/api/menuedit',
        method: 'post',
        data: qs.stringify(user)
    })
}

//菜单删除
export let reqMuneDele = (obj) => {
    return axios({
        url: baseUrl + '/api/menudelete',
        method: 'post',
        data: obj
    })
}

//菜单获取
export let reqMuneInfo = (obj) => {
    return axios({
        url: baseUrl + '/api/menuinfo',
        method: 'get',
        params: obj
    })
}

//角色列表
export let reqRoleList = () => {
    return axios({
        url: baseUrl + '/api/rolelist',
        method: 'get'
    })
}

//角色添加
export let reqRoleAdd = (user) => {
    return axios({
        url: baseUrl + '/api/roleadd',
        method: 'post',
        data: qs.stringify(user)
    })
}

//角色一条
export let reqRoleInfo = (user) => {
    return axios({
        url: baseUrl + '/api/roleinfo',
        method: 'get',
        params: user
    })
}

//角色修改
export let reqRoleEdit = (user) => {
    return axios({
        url: baseUrl + '/api/roleedit',
        method: 'post',
        data: qs.stringify(user)
    })
}

//角色删除
export let reqRoleDel = (user) => {
    return axios({
        url: baseUrl + '/api/roledelete',
        method: "post",
        data: qs.stringify(user)
    })
}

//管理员添加
export let reqAdminAdd = (user) => {
    return axios({
        url: baseUrl + '/api/useradd',
        method: 'post',
        data: qs.stringify(user)
    })
}
//管理员列表
export let reqAdminList = (obj) => {
    return axios({
        url: baseUrl + '/api/userlist',
        method: "get",
        params: obj
    })
}
//管理员详情
export let reqAdminInfo = (id) => {
    return axios({
        url: baseUrl + '/api/userinfo',
        method: 'get',
        params: { uid: id }
    })
}
//管理员修改
export let reqAdminEdit = (user) => {
    return axios({
        url: baseUrl + '/api/useredit',
        method: 'post',
        data: qs.stringify(user)
    })
}
//管理员删除
export let reqAdminDale = (user) => {
    return axios({
        url: baseUrl + '/api/userdelete',
        method: 'post',
        data: qs.stringify(user)
    })
}

//管理员总数
export let reqAdminCount = () => {
    return axios({
        url: baseUrl + '/api/usercount'
    })
}
//商品添加
export let reqCateAdd = (user) => {
    return axios({
        url: baseUrl + '/api/cateadd',
        method: 'post',
        data: dataToFromData(user)
    })
}
//商品列表
export let reqCateList = (obj) => {
    return axios({
        url: baseUrl + '/api/catelist',
        method: "get",
        params: obj
    })
}
//商品详情
export let reqCateInfo = (obj) => {
    return axios({
        url: baseUrl + '/api/cateinfo',
        method: 'get',
        params: obj
    })
}
//商品修改
export let reqCateEdit = (user) => {
    return axios({
        url: baseUrl + '/api/cateedit',
        method: 'post',
        data: dataToFromData(user)
    })
}
//商品删除
export let reqCateDel = (user) => {
    return axios({
        url: baseUrl + '/api/catedelete',
        method: 'post',
        data: qs.stringify(user)
    })
}
/*****************会员管理 *******************************/
//列表
export let reqMemberList = () => {
    return axios({
        url: baseUrl + "/api/memberlist",
        method: 'get'
    })
}
//详情
export let reqMemberInfo = (obj) => {
    return axios({
        url: baseUrl + '/api/memberinfo',
        method: 'get',
        params: obj
    })
}
//修改
export let reqMemberEdit = (user) => {
    return axios({
        url: baseUrl + "/api/memberedit",
        method: 'post',
        data: qs.stringify(user)
    })
}
/**************************************************/
/*****************轮播图管理*********************/
//轮播图添加
export let reqBannerAdd = (user) => {
    return axios({
        url: baseUrl + '/api/banneradd',
        method: 'post',
        data: dataToFromData(user)
    })
}
//列表
export let reqBannerList = () => {
    return axios({
        url: baseUrl + '/api/bannerlist',
        method: 'get'
    })
}
//详情
export let reqBannerInfo = (obj) => {
    return axios({
        url: baseUrl + '/api/bannerinfo',
        method: 'get',
        params: obj
    })
}
//修改
export let reqBannerEdit = (user) => {
    return axios({
        url: baseUrl + '/api/banneredit',
        method: 'post',
        data: dataToFromData(user)
    })
}
//删除
export let reqBannerDel = (obj) => {
    return axios({
        url: baseUrl + '/api/bannerdelete',
        method: 'post',
        data: obj
    })
}
/**************************************************/
/***************商品规格***************************/
//添加
export let reqSpecsAdd = (user) => {
    return axios({
        url: baseUrl + '/api/specsadd',
        method: 'post',
        data: qs.stringify(user)
    })
}
//列表
export let reqSpecsList = (obj) => {
    return axios({
        url: baseUrl + '/api/specslist',
        method: 'get',
        params: obj
    })
}
//详情
export let reqSpecsInfo = (obj) => {
    return axios({
        url: baseUrl + '/api/specsinfo',
        method: 'get',
        params: obj
    })
}
//修改
export let reqSpescEdit = (user) => {
    return axios({
        url: baseUrl + '/api/specsedit',
        method: 'post',
        data: qs.stringify(user)
    })
}
//删除
export let reqSpescDel = (obj) => {
    return axios({
        url: baseUrl + '/api/specsdelete',
        method: 'post',
        data: obj
    })
}
//总数
export let reqSpescCount = () => {
    return axios({
        url: baseUrl + '/api/specscount',
        method: 'get'
    })
}
/**********************************************/
/*********************商品管理*****************/
//添加
export let reqGoodsAdd = (user) => {
    return axios({
        url: baseUrl + '/api/goodsadd',
        method: 'post',
        data: dataToFromData(user)
    })
}
//列表
export let reqGoodsList = (user) => {
    return axios({
        url: baseUrl + '/api/goodslist',
        method: 'get',
        params: user
    })
}
//详情
export let reqGoodsInfo = (obj) => {
    return axios({
        url: baseUrl + '/api/goodsinfo',
        method: "get",
        params: obj
    })
}
//修改
export let reqGoodSEdit = (user) => {
    return axios({
        url: baseUrl + '/api/goodsedit',
        method: 'post',
        data: dataToFromData(user)
    })
}
//删除
export let reqGoodsDel = (obj) => {
    return axios({
        url: baseUrl + '/api/goodsdelete',
        method: 'post',
        data: obj
    })
}
//总数
export let reqGoodsCount = () => {
    return axios({
        url: baseUrl + '/api/goodscount',
        method: 'get'
    })
}
/*******************************************/
/****************秒杀管理***********************/
//添加
export let reqSeckAdd = (user) => {
    return axios({
        url: baseUrl + '/api/seckadd',
        method: 'post',
        data: qs.stringify(user)
    })
}
//列表
export let reqSeckList = () => {
    return axios({
        url: baseUrl + '/api/secklist',
        method: 'get'
    })
}
//详情
export let reqSeckInfo = (obj) => {
    return axios({
        url: baseUrl + '/api/seckinfo',
        method: 'get',
        params: obj
    })
}
//修改
export let reqSeckEdit = (user) => {
    return axios({
        url: baseUrl + '/api/seckedit',
        method: 'post',
        data: qs.stringify(user)
    })
}
//删除
export let reqSeckDel = (obj) => {
    return axios({
        url: baseUrl + '/api/seckdelete',
        method: 'post',
        data: obj
    })
}