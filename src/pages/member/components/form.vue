<template>
  <div>
    <el-dialog title="编辑会员" :visible.sync="info.isshow" @closed="cancel">
      <el-form :model="user" :rules="rules">
        <el-form-item label="手机号" label-width="100px">
          <el-input v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" label-width="100px">
          <el-input v-model="user.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px" prop="password">
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
        <el-button type="primary" @click="updata">修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { indexRoutes } from "../../../router/index";
import { reqMemberEdit, reqMemberInfo } from "../../../utils/http";
import { successalert, erroralert } from "../../../utils/alert";
export default {
  props: ["info", "list"],
  data() {
    return {
      user: {
        uid: "",
        nickname: "",
        phone: "",
        password: "",
        status: 1
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ]
      }
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
        uid: "",
        nickname: "",
        phone: "",
        password: null,
        status: 1
      };
    },
    //获取一条信息
    getOne(uid) {
      reqMemberInfo({ uid: uid }).then(res => {
        if ((res.data.code = 200)) {
          this.user = res.data.list;
          this.user.password = "";
        }
      });
    },
    //修改
    updata() {
      if (this.user.password == "") {
        this.user.password = this.password;
      }
      reqMemberEdit(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.$emit("init");
        }
      });
    }
  }
};
</script>
<style scoped>
</style>