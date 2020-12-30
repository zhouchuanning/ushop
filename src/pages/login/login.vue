<template>
  <div class="back">
    <div class="con">
      <h2>登录</h2>
      <el-input v-model="name" placeholder="请输入账户" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="pass" show-password clearable></el-input>
      <el-button type="primary" round>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  directives: {},
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  mounted() {},
  methods: {}
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
