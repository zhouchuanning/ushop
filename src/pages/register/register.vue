<template>
  <div class='reg'>
    <p>手机号:</p>
    <input type="text" v-model='user.phone'>
    <p>昵称:</p>
    <input type="text" v-model='user.nickname'>
    <p>密码:</p>
    <input type="text" v-model='user.password'>
    <button @click='register'>注册</button>
  </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'vant'
import {reqRegister} from '../../utils/http.js'
export default {
  data() {
    return {
      user:{
        phone:'',
        nickname:'',
        password:''
      }
    };
  },
  mounted() {

  },
  methods: {
    register(){
      console.log(this.user)
      reqRegister(this.user).then(res=>{
        if(res.data.code===200){
          Toast(res.data.msg)
          this.$router.push('/login')
        }
        console.log(res);
      })
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/index.styl';

.reg {
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
  line-height 0.5rem

}
</style>
