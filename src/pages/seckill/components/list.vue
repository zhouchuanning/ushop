<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="title" label="活动名称" width="180">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="info" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { reqSeckDel } from "../../../utils/http";
import { successalert } from "../../../utils/alert";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      list: "seck/list"
    })
  },
  mounted() {
    this.reqList();
  },
  methods: {
    ...mapActions({
      reqList: "seck/reqList"
    }),
    del(id) {
      this.$confirm("是否要删除?", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning"
      })
        .then(() => {
          reqSeckDel({ id: id }).then(res => {
            if (res.data.code == 200) {
              successalert(res.data.msg);
              this.reqList();
              this.$emit("init");
            }
          });
        })
        .catch(() => {});
    },
    edit(id) {
      this.$emit("edit", id);
    }
  }
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>