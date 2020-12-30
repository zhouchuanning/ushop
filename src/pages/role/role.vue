<template>
  <div>
    <el-button type="primary" @click="willadd">添加</el-button>
    <v-list :list="list" @init="init" @edit="edit($event)"></v-list>
    <v-form :list="list" :info="info" @init="init" ref="add"></v-form>
  </div>
</template>

<script>
import vList from "./components/list";
import vForm from "./components/form";
import { reqRoleList } from "../../utils/http";
export default {
  components: {
    vList,
    vForm
  },
  directives: {},
  data() {
    return {
      info: {
        isshow: false,
        isadd: true
      },
      list: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    willadd() {
      this.info.isshow = true;
      this.info.isadd = true;
    },
    init() {
      reqRoleList().then(res => {
        if (res.data.code == 200) {
          this.list = res.data.list;
        }
      });
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
</style>