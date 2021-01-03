<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="id" label="角色编号" width="180" sortable>
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180" sortable>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
<<<<<<< HEAD
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
=======
      <el-table-column label="操作">
        <template>
          <el-button type="primary" @click="edit(scope.row.id)"
            >编辑</el-button
          >
          <el-button type="info" @click="del(scope.row.id)">删除</el-button>
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { reqRoleDel } from "../../../utils/http";
import { successalert } from "../../../utils/alert";
export default {
  props: ["list"],
  components: {},
  directives: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    del(id) {
      reqRoleDel({ id: id }).then(res => {
        if ((res.data.code = 200)) {
          successalert(res.data.msg);
          this.$emit("init");
        }
      });
    },
    edit(id) {
      this.$emit("edit", id);
    }
  }
};
</script>

<style scoped>
</style>