<template>
  <div class="back">
    <div class="con">
      <h2>登录</h2>
<<<<<<< HEAD
      <el-form :model="user" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="user.username"
            placeholder="请输入账户"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="user.password"
            show-password
            clearable
          ></el-input>
        </el-form-item>
      </el-form>

      <el-button type="primary" @click="login" round>登录</el-button>
=======
      <el-input v-model="name" placeholder="请输入账户" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="pass" show-password clearable></el-input>
      <el-button type="primary" round>登录</el-button>
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { reqLogin } from "../../utils/http";
import { mapActions } from "vuex";
=======
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
export default {
  name: "login",
  components: {},
  directives: {},
  data() {
    return {
<<<<<<< HEAD
      user: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    ...mapActions({
      changeUSer: "changeUser"
    }),
    login() {
      reqLogin(this.user).then(res => {
        if (res.data.code === 200) {
          this.changeUSer(res.data.list);
          this.$router.push("/");
        }
      });
    }
  }
=======
      name: "",
      pass: ""
    };
  },
  mounted() {},
  methods: {}
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.back {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #553445, #433953, #313d60);
}
.con {
  width: 500px;
  height: 250px;
  background: #ffffff;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
h2 {
  line-height: 70px;
}
.el-input {
  width: 450px;
  margin-bottom: 20px;
}
</style>
