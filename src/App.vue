<template>
  <div id="app">
    <eight-ball />
  </div>
</template>

<script>
import EightBall from "./components/EightBall/index";

export default {
  name: "app",
  components: {
    EightBall
  }
};
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
