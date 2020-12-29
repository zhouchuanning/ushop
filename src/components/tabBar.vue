<template>
  <div class="footer">
    <router-link v-for="item in navs" :key='item.path' :to='item.path' active-class="select">
      <img :src="$route.path===item.path?item.select_img:item.noSelect" alt="">
      <div>{{item.text}}</div>
    </router-link>
  </div>
</template>

<script>
import tab_home_hig from "../assets/img/tab_home_hig.png";
import tab_home_nor from "../assets/img/tab_home_nor.png";
import tab_me_hig from "../assets/img/tab_me_hig.png";
import tab_me_nor from "../assets/img/tab_me_nor.png";
import tab_menu_hig from "../assets/img/tab_menu_hig.png";
import tab_menu_nor from "../assets/img/tab_menu_nor.png";
import tab_shopping_hig from "../assets/img/tab_shopping_hig.png";
import tab_shopping_nor from "../assets/img/tab_shopping_nor.png";
export default {
  data() {
    return {
      navs: [
        {
          path: "/index/home",
          text: "首页",
          select_img: tab_home_hig,
          noSelect: tab_home_nor
        },
        {
          path: "/index/cate",
          text: "分类",
          select_img: tab_menu_hig,
          noSelect: tab_menu_nor
        },
        {
          path: "/index/shop",
          text: "购物车",
          select_img: tab_shopping_hig,
          noSelect: tab_shopping_nor
        },
        {
          path: "/index/mine",
          text: "我的",
          select_img: tab_me_hig,
          noSelect: tab_me_nor
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.footer {
  width: 100vw;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.01rem solid #999;
  display: flex;
  background: #fff;
}

.footer a {
  flex: 1;
}

.footer a img {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
  margin: 0.1rem auto;
}

.footer a div {
  text-align: center;
  line-height: 0.4rem;
  color: #333;
}
.footer .select div {
  color: #FF8C00;
}
</style>
