<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
  components: {
    tabBar,
  },
  directives: {},
  data() {
    return {
      nav:[
        {}
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
</style>
