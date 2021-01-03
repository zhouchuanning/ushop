<template>
  <div>
    <v-list :list="list" @init="init" @edit="edit($event)" class="con"></v-list>
    <v-form :info="info" @init="init" :list="list" ref="add"></v-form>
  </div>
</template>

<script>
import vList from "./components/list";
import vForm from "./components/form";
import { reqMemberList } from "../../utils/http";
export default {
  components: {
    vList,
    vForm
  },
  directives: {},
  data() {
    return {
      list: [],
      info: {
        isshow: false,
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      reqMemberList().then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.list = res.data.list;
        }
      });
    },
    edit(uid) {
      this.info.isshow = true;
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