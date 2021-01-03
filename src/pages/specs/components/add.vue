<template>
  <div>
    <el-dialog
      :title="info.isadd ? '添加规格' : '编辑规格'"
      :visible.sync="info.isshow"
      
      @closed="cancel"
    >
<<<<<<< HEAD
      <el-form :model="user" :rules="rules">
        <el-form-item label="规格名称" label-width="100px" prop="specsname">
=======
      <el-form :model="user">
        <el-form-item label="规格名称" label-width="100px">
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
          <el-input v-model="user.specsname"></el-input>
        </el-form-item>
        <el-form-item
          label="规格属性"
          label-width="100px"
          v-for="(item, index) in attrsArr"
          :key="index"
        >
          <div class="line">
            <el-input v-model="item.value" class="line-ipt"></el-input>
            <el-button
              type="primary"
              class="line-btn"
              v-if="index == 0"
              @click="addAttr()"
              >新增规格属性</el-button
            >
            <el-button
              type="danger"
              class="line-btn"
              v-else
              @click="delAttr(index)"
              >删除</el-button
            >
          </div>
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
import { mapActions, mapGetters } from "vuex";
import { reqSpescEdit, reqSpecsInfo, reqSpecsAdd } from "../../../utils/http";
import { successalert } from "../../../utils/alert";
export default {
  props: ["info"],
  data() {
    return {
      user: {
        specsname: "",
        attrs: "[]",
        status: 1
      },
<<<<<<< HEAD
      attrsArr: [{ values: "" }],
      rules:{
        specsname:[
              { required: true, message: '请输规格名称', trigger: 'blur' },
        ]
      }
=======
      attrsArr: [{ values: "" }]
>>>>>>> 4787c507a4e10a7b43642c42bac03ceb378a68fd
    };
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {},
  methods: {
    ...mapActions({
      reqList: "specs/reqList",
      reqTotal: "specs/reqTotal"
    }),
    //关闭弹框
    cancel() {
      if (!this.info.isadd) {
        this.empty();
      }
      this.info.isshow = false;
    },
    addAttr() {
      this.attrsArr.push({ value: "" });
    },
    delAttr(index) {
      this.attrsArr.splice(index, 1);
    },
    //清空弹框
    empty() {
      this.user = {
        specsname: "",
        attrs: "[]",
        status: 1
      };
      this.attrsArr = [{ values: "" }];
    },
    //添加
    add() {
      this.user.attrs = JSON.stringify(this.attrsArr.map(item => item.value));
      reqSpecsAdd(this.user).then(res => {
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
      reqSpecsInfo({ id: id }).then(res => {
        console.log(res);
        if ((res.data.code = 200)) {
          this.user = res.data.list[0];
          this.user.attrs = JSON.parse(this.user.attrs);
          this.attrsArr = this.user.attrs.map(item => ({ value: item }));
        }
      });
    },
    //修改
    updata() {
      this.user.attrs = JSON.stringify(this.attrsArr.map(item => item.value));
      reqSpescEdit(this.user).then(res => {
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

<style scoped>
.line {
  display: flex;
}
.line-btn {
  width: auto;
}
.line-ipt {
  flex: 1;
}
</style>