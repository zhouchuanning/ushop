<template>
  <div>
    <el-dialog
<<<<<<< HEAD
      :title="info.isadd ? '添加菜单' : '编辑菜单'"
      :visible.sync="info.isshow"
      @closed="cancel"
    >
      <el-form :model="user" :rules="rules">
        <el-form-item label="菜单名称" label-width="100px" prop="title">
          <el-input v-model="user.title"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" label-width="100px" prop="pid">
          <el-select v-model="user.pid" @change="changePid" >
=======
      :title="info.isadd?'添加菜单':'编辑菜单'"
      :visible.sync="info.isshow"
      
      @closed="cancel"
    >
      <el-form  :model="user">
        <el-form-item label="菜单名称" label-width="100px">
          <el-input v-model="user.title"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" label-width="100px">
          <el-select v-model="user.pid" @change="changePid">
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option
              v-for="item in list"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型" label-width="100px">
          <el-radio v-model="user.type" :label="1" disabled="">目录</el-radio>
          <el-radio v-model="user.type" :label="2" disabled="">菜单</el-radio>
        </el-form-item>
        <el-form-item
          label-width="100px"
          label="菜单图标"
          v-if="user.type == 1"
        >
          <el-select v-model="user.icon">
            <el-option v-for="item in icons" :key="item" :value="item">
              <i :class="item"></i
            ></el-option>
          </el-select>
        </el-form-item>
<<<<<<< HEAD
        <el-form-item label-width="100px" label="菜单地址" prop="url">
=======
        <el-form-item label-width="100px" label="菜单地址">
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
          <el-select v-model="user.url">
            <el-option
              v-for="item in indexRoutes"
              :key="item.path"
              :value="'/' + item.path"
              :label="item.name + '-/' + item.path"
            ></el-option></el-select
        ></el-form-item>
        <el-form-item label="状态" label-width="100px">
          <el-switch
            v-model="user.status"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" v-if="info.isadd" @click="add()"
          >添加</el-button
        >
        <el-button type="primary" v-else @click="updata">修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { indexRoutes } from "../../../router/index";
import {
  reqMuneAdd,
  reqMuneEdit,
  reqMuneInfo,
  reqMuneDele
} from "../../../utils/http";
import { successalert } from "../../../utils/alert";
export default {
  props: ["info", "list"],
  name: "add",
  components: {},
  directives: {},
  data() {
    return {
      user: {
<<<<<<< HEAD
        pid: 0,
=======
        pad: 0,
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1
      },
      icons: [
        "el-icon-setting",
        "el-icon-user-solid",
        "el-icon-camera-solid",
        "el-icon-s-platform",
        "el-icon-s-order"
      ],
<<<<<<< HEAD
      indexRoutes,
      rules: {
        title: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
        pid: [{ required: true, message: "请选择上级菜单", trigger: "change" }],
        url: [{ required: true, message: "请选择菜单地址", trigger: "change" }]
      }
=======
      indexRoutes
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
    };
  },
  mounted() {},
  methods: {
    //关闭弹框
    cancel() {
      if (!this.info.isadd) {
        this.empty();
      }
      this.info.isshow = false;
    },
    //清空弹框
    empty() {
      this.user = {
        pad: 0,
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1
      };
    },
    //添加
    add() {
      reqMuneAdd(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.$emit("init");
        }
      });
    },
    //获取一条信息
    getOne(id) {
      reqMuneInfo({ id: id }).then(res => {
        if ((res.data.code = 200)) {
          this.user = res.data.list;
          this.user.id = id;
        }
      });
    },
    //修改
    updata() {
      reqMuneEdit(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.$emit("init");
        }
      });
    },
    changePid() {
      if (this.user.pid == 0) {
        this.user.type = 1;
      } else {
        this.user.type = 2;
      }
    }
  }
};
</script>

<style scoped>
</style>