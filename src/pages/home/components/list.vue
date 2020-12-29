<template>
  <ul class="list">
    <li is='router-link' :to='"/detail?id="+item.id' v-for="item in goods" :key="item.id" class="item" >
    <img :src="$pre+item.img" alt="">
    <div class="right">
      <h3>{{item.goodsname}}</h3>
      <div class="prc">&yen;{{item.price|filterPrice}}</div>
      <button >立即抢购</button>
    </div>
    </li>
  </ul>
</template>

<script>
import { reqHomeGoods } from "@/utils/http.js";
export default {
  name: "list",
  data() {
    return {
      goods: []
    };
  },
  mounted() {
    reqHomeGoods().then(res => {
      this.goods = res.data.list[0].content;
    });
  },
  methods: {
 
  }
};
</script>

<style lang="stylus" scoped>
.list {
  margin-bottom: 1rem;
}

.item {
  width: 90%;
  margin: 0.1rem auto;
  display: flex;
  padding: 0.1rem;
}

.item img {
  width: 2rem;
  height: 2rem;
}

.item .right {
  flex: 1;
  margin-left: 0.5rem;
}

.item h3 {
  color: #333;
  font-size: 0.4rem;
}

.prc {
  margin-top: 0.2rem;
  color: red;
  font-size: 0.4rem;
}

button {
  background orange
  border none
  color #fff
  width 2rem
  line-height .8rem
  border-radius .2rem
}
</style>
