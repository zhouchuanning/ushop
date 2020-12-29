<template>
  <div>
    <div class="logo">
      <img :src="logo" alt="">
      <input type="text" value="搜索">
    </div>
    <v-banner></v-banner>
    <v-limit></v-limit>
    <v-list></v-list>
  </div>
</template>

<script>
import vBanner from './components/banner'
import vLimit from './components/limit'
import logo from '../../assets/img/img/home/logo.jpg'
import vList from './components/list'
export default {
 components:{
    vBanner,
    vLimit,
    vList
  },
  data() {
    return {
      logo
    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/index.styl';
.logo{
  width 100vw
  height 0.8rem
}
img{
  width 2rem
  height 0.4rem
  margin  .2rem 0 0 .2rem
}
input {
  float right
  margin .1rem .2rem 0 0
  line-height .6rem
  background $font-color3
  border-radius  0.2rem
  text-indent .2rem
}
</style>
