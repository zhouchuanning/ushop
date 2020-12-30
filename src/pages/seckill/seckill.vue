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
  components: {
    vList,
    vAdd
  },
  computed: {
    ...mapGetters({
      list: "seck/list"
    })
  },
  data() {
    return {
      info: {
        isshow: false,
        isadd: false
      }
    };
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      reqList: "seck/reqList"
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