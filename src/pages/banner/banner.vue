<template>
  <div>
    <el-button type="primary" round @click="willadd">添加</el-button>
    <v-list :list="list" @init="init" @edit="edit($event)" class="con"></v-list>
    <v-add :info="info" @init="init" :list="list" ref="add"></v-add>
  </div>
</template>

<script>
import vList from "./components/list";
import vAdd from "./components/add";
import { reqBannerList } from "../../utils/http";
export default {
  components: {
    vList,
    vAdd
  },
  directives: {},
  data() {
    return {
      list: [],
      info: {
        isshow: false,
        isadd: false
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      reqBannerList({istree:true}).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.list = res.data.list;
        }
      });
    },
    willadd() {
      this.info.isshow = true;
      this.info.isadd = true;
    },
    edit(id) {
      this.info.isshow = true;
      this.info.isadd = false;
      this.$refs.add.getOne(id);
    }
  }
};
</script>

<style scoped>
.con {
  padding-top: 20px;
}
</style>