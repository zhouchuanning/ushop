<template>
  <div>
    <el-dialog
      :title="info.isadd ? '添加活动' : '编辑活动'"
      :visible.sync="info.isshow"
      @closed="cancel"
    >
      <el-form :model="user" :rules="rules">
        <el-form-item label="活动名称" label-width="100px" prop="title">
          <el-input v-model="user.title"></el-input>
        </el-form-item>
        <el-form-item label-width="100px"  label="活动期限">
          <div class="block">
            <el-date-picker
              v-model="value"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="timestamp"
              @change="changeTime"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="一级分类" label-width="100px" prop="first_cateid">
          <el-select v-model="user.first_cateid" @change="changeFirstCateId">
            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" label-width="100px" prop="second_cateid">
          <el-select v-model="user.second_cateid" @change="changeSecondList">
            <el-option
              v-for="item in secondCateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品" label-width="100px" prop="goodsid">
          <el-select v-model="user.goodsid">
            <el-option
              v-for="item in goodsCateList"
              :key="item.id"
              :label="item.goodsname"
              :value="item.id"
            ></el-option>
          </el-select>
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
import { mapActions, mapGetters } from "vuex";
import {
  reqCateList,
  reqGoodsList,
  reqSeckEdit,
  reqSeckInfo,
  reqSeckAdd
} from "../../../utils/http";
import { successalert, erroralert } from "../../../utils/alert";
export default {
  props: ["info"],
  data() {
    return {
      user: {
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
        status: 1
      },
      goodsCateList: [],
      secondCateList: [],
      value: [],
      rules: {
        title: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        first_cateid: [{ required: true, message: "请输入商品总类", trigger: "change" }],
        second_cateid: [{ required: true, message: "请输入商品分类", trigger: "change" }],
        goodsid: [{ required: true, message: "请选择商品", trigger: "change" }],
      }
    };
  },
  computed: {
    ...mapGetters({
      cateList: "cate/list",
      goodsList: "goods/list",
      seckList: "seck/list"
    })
  },
  mounted() {
    if (this.cateList.length == 0) {
      this.reqCateList();
    }
  },
  methods: {
    ...mapActions({
      reqCateList: "cate/reqList",
      reqGoodsList: "goods/reqList",
      reqList: "seck/reqList"
    }),
    changeTime() {
      this.user.begintime = this.value[0];
      this.user.endtime = this.value[1];
    },
    changeFirstCateId() {
      this.user.second_cateid = "";
      this.user.goodsid = "";
      this.getSecondList();
    },
    getSecondList() {
      reqCateList({ pid: this.user.first_cateid }).then(res => {
        if (res.data.code == 200) {
          this.secondCateList = res.data.list;
        }
      });
    },
    changeSecondList() {
      this.user.goodsid = "";
      this.getGoodsList();
    },
    getGoodsList() {
      reqGoodsList({
        fid: this.user.first_cateid,
        sid: this.user.second_cateid
      }).then(res => {
        if (res.data.code == 200) {
          this.goodsCateList = res.data.list;
        }
      });
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
      this.user = {
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
        status: 1
      };
      this.goodsCateList = [];
      this.secondCateList = [];
      this.value = [];
    },
    //添加
    add() {
      reqSeckAdd(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.reqList();
        }
      });
    },
    //获取一条信息
    getOne(id) {
      reqSeckInfo({ id: id }).then(res => {
        if ((res.data.code = 200)) {
          this.user = res.data.list;
          this.user.id = id;
          this.value = [this.user.begintime, this.user.endtime];
          this.getGoodsList();
          this.getSecondList();
        }
      });
    },
    //修改
    updata() {
      reqSeckEdit(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.reqList();
        }
      });
    }
  }
};
</script>
<style scoped >
</style>