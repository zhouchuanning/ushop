<template>
 <div>
   <van-swipe-cell  v-for="(item) in list" :key='item.id'>
    <van-card class="card"
    v-if="item.price"
    :num="item.num"
    :title="item.goodsname"
    :thumb="$pre+item.img">
      <template #tags>
        <div>单价：{{item.price|filterPrice}}</div>
        <div>总价：{{item.price*item.num|filterPrice}}</div>
        <input type="checkbox" class="check" >
      </template>
      <template #footer>
      <van-button size="mini" type="info" @click="sub(item.id,item.num)">-</van-button>
      <van-button size="mini" type="primary" @click="add(item.id)">+</van-button>
      </template>
    </van-card>
    <template #right>
    <van-button square text="删除" type="danger" class="delete-button"  @click="beforeClose(item.id)"/>
    </template>
</van-swipe-cell>
<van-submit-bar button-text="去结算" class="bottom" >
  <div class="checks">
    <input type="checkbox" @change="checks(item)">
    <p>全选</p>
  </div>
  <p class="all">总价：{{allprice}}</p>
</van-submit-bar>
 </div>

</template>

<script>
import { SwipeCell, Toast, Card, Dialog, SubmitBar } from "vant";
import { reqShopList, reqShopDit, reqShopDel } from "../../utils/http";
import radio_hig from "../../assets/img/radio_hig.png";
import radio_nor from "../../assets/img/radio_nor.png";
import editor_hig from "../../assets/img/editor_hig.png";
import editor_nor from "../../assets/img/editor_nor.png";
import index from "../../router";
export default {
  name: "shop",
  components: {},
  directives: {},
  data() {
    return {
      list: [],
      select: radio_hig,
      noselect: radio_nor
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      reqShopList().then(res => {
        this.list = res.data.list;
        this.list.forEach(item => (item.check = false));
      });
    },
    update(id, type) {
      reqShopDit({
        id: id,
        type: type
      }).then(res => {
        if (res.data.code == 200) {
          Toast(res.data.msg);
          this.init();
        }
      });
    },
    add(id) {
      this.update(id, 2);
    },
    sub(id, num) {
      if (num <= 1) {
        Toast("宝贝不能再少了");
        return;
      }
      this.update(id, 1);
    },
    beforeClose(id) {
      Dialog.confirm({
        titile: "删除提示",
        message: "你确定要删除吗"
      }).then(() => {
        reqShopDel(id).then(res => {
          if (res.data.code == 200) {
            Toast(res.data.msg);
            this.init();
          } else {
            Toast(res.data.msg);
          }
        });
      });
    },
    checks(list) {
      console.log(this.list);
    }
  },
  computed: {
    allprice(){
      this.list.reduce((total, item) => item.checked ? total += item.price * item.num : total, 0)
    }
  }
};
</script>

<style scoped>
.delete-button {
  height: 100%;
}
.check {
  position: fixed;
  left: 0;
  top: 50%;
  margin: 0 0.2rem;
}
.card {
  margin-left: 0.5rem;
}
.bottom {
  margin-bottom: 1.1rem;
}
.checks {
  float: left;
  text-align: center;
}
.all{
  float: left;
}
</style>
