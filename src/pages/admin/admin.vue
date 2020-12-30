<template>
  <div>
    <el-button type="primary" round @click="willadd">添加</el-button>
    <v-list :list="list" @init="init" @edit="edit($event)" class="con"></v-list>
    <v-add :info="info" @init="init" :list="list" ref="add"></v-add>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
import vList from "./components/list";
import vAdd from "./components/add";
import { reqAdminList, reqAdminCount } from "../../utils/http";
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
      },
      pageSize: 2,
      total: 0,
      page: 1
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    getTotal() {
      reqAdminCount().then(res => {
        if (res.data.code == 200) {
          this.total = res.data.list[0].total;
        }
      });
    },
    getList() {
      reqAdminList({ page: this.page, size: this.pageSize }).then(res => {
        if (res.data.list.length == 0 && this.page > 1) {
          this.page--;
          this.getList();
        }
        this.list = res.data.list;
      });
    },
    init() {
      this.getTotal();
      this.getList();
    },
    changePage(e) {
      this.page = e;
      this.getList();
    },
    willadd() {
      this.info.isshow = true;
      this.info.isadd = true;
    },
    edit(uid) {
      this.info.isshow = true;
      this.info.isadd = false;
      this.$refs.add.getOne(uid);
    }
  }
};
</script>

<style scoped>
.con {
  padding-top: 20px;
}
</style>