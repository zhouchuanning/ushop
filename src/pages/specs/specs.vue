<template>
  <div>
    <el-button type="primary" round @click="willadd">添加</el-button>
    <v-list @edit="edit($event)" class="con"></v-list>
    <v-add :info="info" ref="add"></v-add>
  </div>
</template>

<script>
import vList from "./components/list";
import vAdd from "./components/add";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "specs",
  components: {
    vList,
    vAdd
  },
  directives: {},
  data() {
    return {
      info: {
        isshow: false,
        isadd: true
      }
    };
  },
  computed: {
    ...mapGetters({
      list: "cate/list"
    })
  },
  mounted() {},
  methods: {
    ...mapActions({
      reqList: "cate/reqList"
    }),
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