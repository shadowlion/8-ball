<template>
  <article>
    <form @submit.prevent="shake" @reset="reset" v-if="!shaken" novalidate>
      <label for="question">
        Ask a question below and maybe you'll get the answers you seek...
        <input type="text" id="question" v-model="question" />
      </label>
      <button type="submit">Submit</button>
    </form>
    <section v-else>
      <p>{{ answer }}</p>
      <button @click="reset">Shake Again!</button>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters(["answer", "shaken"]),
    question: {
      get() {
        return this.$store.getters["question"];
      },
      set(val) {
        this.$store.dispatch("setQuestion", val);
      }
    }
  },
  methods: {
    shake(e: Event) {
      e.preventDefault();
      this.$store.dispatch("setAnswer");
    },
    reset() {
      this.$store.dispatch("resetForm");
    }
  }
});
</script>
