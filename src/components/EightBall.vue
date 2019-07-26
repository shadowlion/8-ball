<template lang="pug">
  .container
    img(src="@/assets/8-ball.png" width="100px")
    h1.mt-5 Hannah's 8-Ball
    div(v-if="!shaken")
      b-form(@submit="shake" @reset="reset" v-if="!shaken" no-validate)
        b-form-group(
          label="Ask a question below and maybe you'll get the answers you seek..."
          label-for="question"
          :invalid-feedback="invalidFeedback"
          :state="state"
        )
          b-form-input(id="question" v-model="question" :state="state" trim)
        b-button(block type="submit" variant="primary") Submit
    div(v-if="shaken")
      p {{ answer }}
      button.btn.btn-primary.btn-block(@click="reset") Shake Again!
</template>

<script>
export default {
  data() {
    return {
      answers: [
        "Yes.",
        "Maybe?",
        "Would Justin say so?",
        "How would Marc answer?",
        "What did Rachel say last week?",
        "Would Ross say so?",
        "I don't see it happening anytime soon.",
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
      ],
      question: null,
      answer: null,
      shaken: false
    };
  },
  methods: {
    toggle() {
      this.shaken = !this.shaken;
    },
    shake(e) {
      e.preventDefault();
      console.log(this.question);
      const index = [Math.floor(Math.random() * this.answers.length)];
      this.answer = this.answers[index];
      console.log(this.answer);
      this.toggle();
    },
    reset() {
      this.question = null;
      this.answer = null;
      this.toggle();
    }
  },
  computed: {
    state() {
      if (this.question === null) {
        return null;
      } else if (this.question.length === 0) {
        return false;
      } else {
        return true;
      }
    },
    invalidFeedback() {
      if (this.question === null || this.question.length > 0) {
        return "";
      } else {
        return "Gotta enter something!";
      }
    }
  }
};
</script>
