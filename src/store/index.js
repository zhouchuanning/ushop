import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { actions } from './actions'
import { state, getters, mutations } from './mutations'
import cate from './modules/cate'
import goods from './modules/goods'
import specs from './modules/specs'
import seck from './modules/seck'
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        cate,
        goods,
        specs,
        seck
    }
})