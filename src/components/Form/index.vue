<template>
  <article>
    <form @submit.prevent="shake" v-if="!shaken">
      <label>
        Ask a question below and maybe you'll get the answers you seek...
        <br />
        <input v-model="question" type="text" data-question />
      </label>
      <button type="submit">Submit</button>
    </form>
    <section v-else>
      <p data-answer>{{ answer }}</p>
      <button @click="reset">Shake Again!</button>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import Answers from "./answers";

export default Vue.extend({
  data() {
    return {
      question: null,
      answer: "",
      shaken: false
    };
  },
  methods: {
    shake() {
      const index = Math.floor(Math.random() * Answers.length);
      this.answer = Answers[index];
      this.shaken = true;
    },
    reset() {
      this.question = null;
      this.shaken = false;
      this.answer = "";
    }
  }
});
</script>
