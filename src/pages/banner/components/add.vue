<template>
  <div>
    <el-dialog
      :title="info.isadd ? '添加轮播图' : '编辑轮播图'"
      :visible.sync="info.isshow"
      
      @closed="cancel"
    >
<<<<<<< HEAD
      <el-form :model="user" :rules="rules">
        <el-form-item label="标题" label-width="100px" prop="title">
=======
      <el-form :model="user">
        <el-form-item label="标题" label-width="100px">
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
          <el-input v-model="user.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" label-width="100px">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="changeImg"
          >
            <img v-if="imgUrl" :src="imgUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
  reqBannerAdd,
  reqBannerEdit,
  reqBannerInfo
} from "../../../utils/http";
import { successalert, erroralert } from "../../../utils/alert";
export default {
  props: ["info", "list"],
  data() {
    return {
      imgUrl: "",
      user: {
        title: "",
        img: null,
        status: 1
<<<<<<< HEAD
      },
      rules:{
        title:[
          { required: true, message: "请输入轮播图名称", trigger: "blur" },
        ]
=======
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
      }
    };
  },
  mounted() {},
  methods: {
    //图片上传
    changeImg(e) {
      let file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.user.img = file;
    },
    //关闭弹框
    cancel() {
      if (!this.info.isadd) {
        this.empty();
      }
      this.info.isshow = false;
    },
    //清空弹框
    empty() {
      this.imgUrl = "";
      this.user = {
        title: "",
        img: null,
        status: 1
      };
    },
    //添加
    add() {
      reqBannerAdd(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.$emit("init");
        }
        console.log(this.user);
      });
    },
    //获取一条信息
    getOne(id) {
      reqBannerInfo({ id: id }).then(res => {
        if ((res.data.code = 200)) {
          this.user = res.data.list;
          this.user.id = id;
          this.imgUrl = this.$pre + this.user.img;
        }
      });
    },
    //修改
    updata() {
      console.log(this.user);
      reqBannerEdit(this.user).then(res => {
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
<style scoped lang="stylus">
.el-form >>>.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>