<template>
  <div class="login">
    <p>账户：</p>
    <input type="text" v-model="user.phone">
    <p>密码：</p>
    <input type="text" v-model="user.password">
    <button @click='login'>登录</button>
    <router-link class='reg' to="/register">注册</router-link>
  </div>
</template>

<script>
import {Toast} from 'vant'
import {reqLogin} from '@/utils/http.js'
import axios from 'axios'
export default {
  data() {
    return {
      user: {
        phone: "",
        password: ""
      }
    };
  },
  mounted() {},
  methods: {
    login(){

      reqLogin(this.user).then(d=>{
        if(d.data.code===200){
          Toast(d.data.msg);
          localStorage.setItem('isLogin',1);
          localStorage.setItem('userInfo',JSON.stringify(d.data.list))
          this.$router.push('/index')
        }
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/index.styl';

.login {
  padding-top: 1rem;
  margin: 0 0.2rem;
}

p {
  width: 100%;
  color: $font-color2;
  font-size: $p;
}

input {
  width: 100%;
  color: $font-color2;
  margin: 0.5rem 0;
  border: 1px solid $font-color2;
}

button {
  width: 100%;
  background: $primary;
  color: $font-color4;
  border-radius: 5%;
  border: none;
  line-height: 0.5rem;
}

.reg {
  text-align: right;
  margin: $p $h1 0 0;
  display: block;
  color: $font-color2;
}
</style>
