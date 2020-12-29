<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item  v-for="item in list" :key="item.id">
        <img :src="$pre+ item.img" alt="">
      </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
import { reqBanner } from "@/utils/http.js";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    reqBanner().then(res => {
      this.list = res.data.list;
    });
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.banner {
  width: 100vw;
  height: 4rem;
}

img {
  width: 100vw;
  height: 4rem;
}
</style>
