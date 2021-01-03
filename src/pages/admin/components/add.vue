<template>
  <div>
    <el-dialog
      :title="info.isadd ? '添加管理员' : '编辑管理员'"
      :visible.sync="info.isshow"
<<<<<<< HEAD
      @closed="cancel"
    >
      <el-form :model="user" :rules="rules">
        <el-form-item label="所属角色" label-width="100px" prop="roleid">
=======
      
      @closed="cancel"
    >
      <el-form :model="user">
        <el-form-item label="所属角色" label-width="100px">
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
          <el-select v-model="user.roleid">
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
<<<<<<< HEAD
        <el-form-item label="用户名称" label-width="100px" prop="username">
          <el-input v-model="user.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px" prop="password">
=======
        <el-form-item label="用户名称" label-width="100px">
          <el-input v-model="user.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px">
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
          <el-input v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
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
  reqMuneDele,
  reqAdminAdd,
  reqAdminInfo,
  reqAdminEdit,
  reqRoleList
} from "../../../utils/http";
import { successalert } from "../../../utils/alert";
export default {
  props: ["info", "list"],
  data() {
    return {
      user: {
        roleid: "",
        username: "",
        password: "",
        status: 1
      },
<<<<<<< HEAD
      roleList: [],
      rules: {
        roleid: [
          { required: true, message: "请选择所属角色", trigger: "change" }
        ],
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ]
      }
=======
      roleList: []
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
    };
  },
  mounted() {
    reqRoleList().then(res => {
      if (res.data.code == 200) {
        this.roleList = res.data.list;
      }
    });
  },
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
        roleid: "",
        username: "",
        password: "",
        status: 1
      };
    },
    //添加
    add() {
      reqAdminAdd(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.$emit("init");
        }
      });
    },
    //获取一条信息
    getOne(uid) {
      console.log(uid);
      reqAdminInfo(uid).then(res => {
        console.log(res);
        if ((res.data.code = 200)) {
          this.user = res.data.list;
          this.user.password = "";
        }
<<<<<<< HEAD
=======

>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
      });
    },
    //修改
    updata() {
      reqAdminEdit(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.$emit("init");
        }
      });
    },
    //修改顶级菜单
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