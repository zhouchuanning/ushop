<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      list: "cate/list"
    })
  },
  data() {
    return {};
  },
  mounted() {
    this.reqList();
  },
  methods: {
    ...mapActions({
      reqList: "cate/reqList"
    })
  },
  watch: {
    list: {
      handler() {
        if (this.list.length > 0) {
          let mychart = require("echarts").init(
            document.getElementById("main")
          );
          var option = {
            title: {
              text: "分类数量"
            },
            tooltip: {},
            legend: {
              data: ["分类数量"]
            },
            xAxis: {
              data: this.list.map(item => item.catename)
            },
            yAxis: {},
            series: [
              {
                name: "分类数量",
                type: "line",
                data: this.list.map(item =>
                  item.children ? item.children.length : 0
                )
              }
            ]
          };
          mychart.setOption(option);
        }
      },
      deep: true
    }
  }
};
</script>

<style  scoped>
#main {
  width: 80%;
  height: 500px;
  margin: 20px auto;
}
</style>
