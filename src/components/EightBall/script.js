import data from "./data.json";

export default {
  data() {
    return {
      answers: data.answers,
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
