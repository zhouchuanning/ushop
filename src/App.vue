<template>
  <div id="app">
    <header> {{$route.name}}</header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
@import './stylus/index.styl'
header {
  width: 100vw;
  height: $margin1;
  background $primary
  text-align  center
  color $font-color4
  font $h1/$margin1 '宋体'
}
</style>
