<template>
  <div>
    <el-container class="index">
      <el-aside width="200px">
        <el-menu
<<<<<<< HEAD
=======
          default-active="2"
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
          class="el-menu-vertical-demo"
          background-color="#20222a"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
<<<<<<< HEAD

          <div v-for="item in userInfo.menus" :key="item.id">
            <!-- 单纯是菜单 -->
            <el-menu-item v-if="!item.children" :index="item.url">{{
              item.title
            }}</el-menu-item>
            <!-- 有目录，有菜单 -->
            <el-submenu :index="item.id + ''" v-if="item.children">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="i in item.children"
                  :key="i.id"
                  :index="i.url"
                  >{{ i.title }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span>{{ userInfo.username }}</span>
          <el-button type="danger" @click="logout">退出登录</el-button>
        </el-header>
=======
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/menu">菜单管理</el-menu-item>
              <el-menu-item index="/role">角色管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="/admin">管理员管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-help"></i>
              <span>商城管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/cate">商品分类</el-menu-item>
              <el-menu-item index="/specs">商品规格</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="/goods">商品管理</el-menu-item>
            <el-menu-item index="/member">会员管理</el-menu-item>
            <el-menu-item index="/banner">轮播图管理</el-menu-item>
            <el-menu-item index="/seckill">秒杀活动</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
        <el-main>
          <!-- 面包屑 -->
          <el-breadcrumb separator="/" v-if="$route.name">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
<<<<<<< HEAD
            <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
=======
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
          </el-breadcrumb>
          <!-- 二级路由 -->
          <router-view class="con"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userInfo: "userInfo"
    })
=======
export default {
  name: "index",
  components: {},
  directives: {},
  data() {
    return {};
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
  },
  mounted() {},
  methods: {
    ...mapActions({
      changeUser: "changeUser"
    }),
    logout() {
      this.changeUser({});
      this.$router.replace("/login");
    }
  }
};
</script>

<style scoped>
.index {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #20222a;
  color: #333;
}

.el-main {
  color: #333;
}
<<<<<<< HEAD
.con {
=======
.con{
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
  padding-top: 20px;
}
</style>
