<template>
  <div>
    <el-dialog
      :title="info.isadd ? '添加商品' : '编辑商品'"
      :visible.sync="info.isshow"
      @opened="opened"
      @closed="cancel"
    >
      <el-form :model="user" :rules="rules">
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
          <el-select v-model="user.second_cateid">
            <el-option
              v-for="item in secondCateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" label-width="100px" prop="goodsname">
          <el-input v-model="user.goodsname"></el-input>
        </el-form-item>
        <el-form-item label="价格" label-width="100px" prop="price">
          <el-input v-model="user.price"></el-input>
        </el-form-item>
        <el-form-item label="市场价格" label-width="100px" prop="market_price">
          <el-input v-model="user.market_price"></el-input>
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
        <el-form-item label="商品规格" label-width="100px" prop="specsid">
          <el-select v-model="user.specsid" @change="changeSpecsId">
            <el-option
              v-for="item in specsList"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规格属性" label-width="80px" prop="specsattr">
          <el-select v-model="user.specsattr" multiple>
            <el-option
              v-for="(item, index) in showSpecsAttr"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否新品">
          <el-radio v-model="user.isnew" :label="1">是</el-radio>
          <el-radio v-model="user.isnew" :label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="是否热卖">
          <el-radio v-model="user.ishot" :label="1">是</el-radio>
          <el-radio v-model="user.ishot" :label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="状态" label-width="100px">
          <el-switch
            v-model="user.status"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
        <el-form-item label="商品描述">
          <div id="editor" v-if="info.isshow"></div>
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
import E from "wangeditor";
import { mapActions, mapGetters } from "vuex";
import {
  reqGoodsInfo,
  reqGoodsAdd,
  reqGoodSEdit,
  reqCateList
} from "../../../utils/http";
import { successalert } from "../../../utils/alert";
export default {
  props: ["info"],
  data() {
    return {
      user: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: null,
        description: "",
        specsid: "",
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1
      },
      imgUrl: "",
      secondCateList: [],
      showSpecsAttr: [],
      rules: {
        first_cateid: [
          { required: true, message: "请选择一级分类", trigger: "change" }
        ],
        second_cateid: [
          { required: true, message: "请选择二级分类", trigger: "change" }
        ],
        goodsname: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ],
        price: [
          { required: true, message: "价格不能为空" },
          { type: "number", message: "价格必须为数字值" }
        ],
        market_price: [
          { required: true, message: "市场价格不能为空" },
          { type: "number", message: "市场价格必须为数字值" }
        ],
        specsid: [{ required: true, message: "请选择规格", trigger: "change" }],
        specsattr: [
          { required: true, message: "请选择规格", trigger: "change" }
        ]
      }
    };
  },
  computed: {
    ...mapGetters({
      cateList: "cate/list",
      specsList: "specs/list"
    })
  },
  mounted() {
    if (this.cateList.length == 0) {
      this.reqCateList();
    }
    this.reqSpecsList(true);
  },
  methods: {
    ...mapActions({
      reqCateList: "cate/reqList",
      reqSpecsList: "specs/reqList",
      reqList: "goods/reqList",
      reqTotal: "goods/reqTotal"
    }),
    changeFirstCateId() {
      this.user.second_cateid = "";
      this.getSecondList();
    },
    getSecondList() {
      reqCateList({ pid: this.user.first_cateid }).then(res => {
        if (res.data.code == 200) {
          this.secondCateList = res.data.list;
        }
      });
    },
    changeSpecsId() {
      this.user.specsattr = [];
      this.getShowSpecsAttr();
    },
    getShowSpecsAttr() {
      let obj = this.specsList.find(item => item.id == this.user.specsid);
      this.showSpecsAttr = obj ? obj.attrs : [];
      console.log(this.showSpecsAttr);
    },
    //关闭弹框
    cancel() {
      if (!this.info.isadd) {
        this.empty();
      }
      this.info.isshow = false;
    },
    changeImg(e) {
      let file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.user.img = file;
    },
    //清空弹框
    empty() {
      this.user = {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: null,
        description: "",
        specsid: "",
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1
      };
      this.imgUrl = "";
      this.secondCateList = [];
      this.showSpecsAttr = [];
    },
    //添加
    add() {
      this.user.description = this.editor.txt.html();
      let data = {
        ...this.user,
        specsattr: JSON.stringify(this.user.specsattr)
      };
      reqGoodsAdd(data).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.reqList();
          this.reqTotal();
        }
      });
    },
    //获取一条信息
    getOne(id) {
      reqGoodsInfo({ id: id }).then(res => {
        if ((res.data.code = 200)) {
          this.user = res.data.list;
          this.getSecondList();
          this.imgUrl = this.$pre + this.user.img;
          this.getShowSpecsAttr();
          this.user.specsattr = JSON.parse(this.user.specsattr);
          this.user.id = id;
          if (this.editor) {
            this.editor.txt.html(this.user.description);
          }
        }
      });
    },
    //修改
    updata() {
      this.user.description = this.editor.txt.html();
      let data = {
        ...this.user,
        specsattr: JSON.stringify(this.user.specsattr)
      };
      reqGoodSEdit(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.reqList();
        }
      });
    },
    opened() {
      this.editor = new E("#editor");
      this.editor.create();
      this.editor.txt.html(this.user.description);
    }
  }
};
</script>

<style scoped lang='stylus'>
.line {
  display: flex;
}

.line-btn {
  width: auto;
}

.line-ipt {
  flex: 1;
}

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