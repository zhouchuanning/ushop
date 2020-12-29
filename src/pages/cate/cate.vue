<template>
  <div class='con' >
    <ul class="cate">
      <li  v-for="(item,index) in list" :key="item.id" :class="[index===n?'select':'show']" @click="n=index">{{item.catename}}</li>
    </ul>
    <ul class="catelist">
      <li v-for="item in list[n].children" :key='item.id' is='router-link' :to='"/list?fid="+item.id+"&tit"+item.catename '>
        <img :src="$pre+item.img" alt="">
        <p>{{item.catename}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { reqShopCate } from "../../utils/http.js";
export default {
  name: "cate",
  data() {
    return {
      list: [{ children: "" }],
      n: 0
    };
  },
  mounted() {
    reqShopCate().then(res => {
      this.list = res.data.list;
      console.log(res)
    });
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.con {
  display: flex;
  padding-bottom: 1.5rem;
}

.cate {
  width: 30%;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.3rem;
}

.cate .select {
  border-left: 0.1rem solid #00a6ac;
  color: orange;
  background: #efefef;
}

.catelist {
  flex: 1;
  overflow: hidden;
  margin-left: 2%;
}

.catelist a {
  float: left;
  margin-top: 0.5rem;
  margin-right: 0.4rem;
  border: 1px solid #00a6ac;
  border-radius: 0.2rem;
  overflow: hidden;
  position: relative;
}

.catelist img {
  width: 2rem;
  height: 1.9rem;
}

.catelist p {
  background: #00a6ac;
  color: #ffffff;
  text-align: center;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
