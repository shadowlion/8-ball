<template>
  <main id="app">
    <section>
      <img src="@/assets/8-ball.png" width="100px" />
      <h1>Hannah's 8-Ball</h1>
    </section>
    <eight-ball-form />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import EightBallForm from "./components/Form/index.vue";

export default Vue.extend({
  name: "app",
  components: {
    EightBallForm
  }
});
</script>

<style>
#app {
  font-family: "Avenir", "Helvetica", "Arial", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
