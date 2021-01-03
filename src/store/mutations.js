<<<<<<< HEAD
export let state = {
    userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}
}
export let getters = {
    userInfo(state) {
        return state.userInfo
    }
}
export let mutations = {
    changeUserInfo(state, obj) {
        state.userInfo = obj
        if (obj.username) {
            sessionStorage.setItem('userInfo', JSON.stringify(obj))
        } else {
            sessionStorage.removeItem('userInfo')
        }
    }
}
=======
export let state = {}
export let getters = {}
export let mutations = {}
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
