<template>
  <div class="con">
    <img :src="$pre+detail.img" alt="">
    <h3 class="tit">{{detail.goodsname}}</h3>
    <div class="prices">
      <div class="price" v-if="detail.price">&yen;{{detail.price|filterPrice}}</div>
      <del><div class="market_price" v-if="detail.price">&yen;{{detail.market_price|filterPrice}}</div></del>
    </div>
    <div class="spans">
      <span v-if="detail.ishot===1">热卖</span>
      <span v-if="detail.isnew===1">新品</span>
    </div>
    <div v-html="detail.description" class="detailImg"></div>
      <van-cell class="bottom" @click="showPopup"><div class="add">加入购物车</div></van-cell>
    <van-popup v-model="show" class="show" position="bottom" :style="{ height: '50%' }">
      <img :src="$pre+detail.img" class="min-img" alt="">
      <h3 class="tit">{{detail.goodsname}}</h3>
      <div class="nav">
        <h3>{{detail.specsname}}</h3>
        <span v-for="(item,index) in detail.specsattr" :key="item" :class="[index===n?'select':''] " @click='n=index'>{{item}}</span>
      </div>
      <van-cell class="bottom" @click="addShop"><div class="add">加入购物车</div></van-cell>
    </van-popup>

  </div>
  <!-- 加入购物车 -->
</template>

<script>
import { reqDetail, reqShopAdd } from "../../utils/http.js";
import { Toast, Popup } from "vant";
export default {
  name: "detail",
  components: {},
  directives: {},
  data() {
    return {
      detail: [],
      show: false,
      n: 0
    };
  },
  mounted() {
    this.init(this.$route.query.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.init(to.query.id);
    next();
  },
  methods: {
    init(id) {
      reqDetail(id).then(res => {
        this.detail = res.data.list[0];
        this.detail.specsattr = JSON.parse(this.detail.specsattr);
      });
    },
    showPopup() {
      this.show = true;
    },
    addShop(){
      reqShopAdd({
        uid:JSON.parse(localStorage.getItem('userInfo')).uid,
        goodsid:this.detail.id,
        num:1
      }).then(res=>{
        if(res.data.code===200){
          Toast('添加成功')
          this.show=false
        }else{
          Toast(res.data.msg)
        }
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
img {
  width: 100vw;
}

.tit {
  text-indent: 0.5rem;
  font-size: 0.4rem;
  line-height: 0.7rem;
  color: #666666;
}

.price {
  color: red;
  text-indent: 0.5rem;
  margin: 0.05rem 0;
  font-size: 0.3rem;
}

del {
  text-indent: 0.4rem;
  color: #999;
  margin: 0.05rem 0;
  font-size: 0.3rem;
}

.con {
  overflow: hidden;
}

.prices {
  float: left;
}

.spans {
  float: left;
  margin-left: 0.2rem;
}

span {
  display: inline-block;
  margin-left: 0.1rem;
  border: 1px solid #faa755;
  color: #faa755;
  font: 0.3rem / 0.5rem;
  width: 0.8rem;
  text-align: center;
}

.bottom {
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
}

.add {
  text-align: center;
  float: right;
  width: 3rem;
  line-height: 1.5rem;
  background: orange;
}

.detailImg {
  margin-bottom: 2rem;
}

.show {
  overflow: hidden;
}

.min-img {
  width: 1.5rem;
  margin: 0.2rem 0 0 0.2rem;
  float: left;
}

.show .tit {
  float: left;
  margin-top: 0.2rem;
}

.nav {
  // float left
  margin: 2rem 0 0 0.2rem;
}

.nav span {
  margin: 0.2rem 0.1rem;
  display: inline-block;
  width 0.9rem
  line-height .5rem
  border-radius .1rem
  color  #333333
  border 1px #333333 solid
}
.nav .select{
  color orange
  border 1px orange solid
  }
</style>
