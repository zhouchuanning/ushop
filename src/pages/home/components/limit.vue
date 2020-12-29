<template>
  <div>
    <div class="con">
      <div v-for="item in list" :key="item.tit" class="limit">
        <img :src="item.img" alt="">
        <p>{{item.tit}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLimit } from "@/utils/http.js";
import img from "@/assets/img/img/home/1.jpg";
export default {
  data() {
    return {
      list: [
        {
          img: img ,
          tit:'限时抢购'
        },
        {
          img: img ,
          tit:'积分商城'
        },
        {
          img: img ,
          tit:'联系我们'
        },
        {
          img: img ,
          tit:'商品分类'
        },
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.con{
  overflow hidden
}
.limit{
  float left
  width 23%
  margin 0 1%
  text-align center
  color #666
}
img {
  width 100%
}
</style>
