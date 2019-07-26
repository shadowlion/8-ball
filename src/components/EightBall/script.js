import data from "./data.json";
import axios from "axios";

export default {
  data() {
    return {
      answers: data.answers,
      question: null,
      answer: null,
      shaken: false,
      regex: /\b(who|what|when|where|why|how)\b/gi
    };
  },
  methods: {
    toggle() {
      this.shaken = !this.shaken;
    },
    shake(e) {
      e.preventDefault();
      const index = [Math.floor(Math.random() * this.answers.length)];
      this.answer = this.answers[index];
      this.sendToSlack(this.question, this.answer);
      this.toggle();
    },
    reset() {
      this.question = null;
      this.answer = null;
      this.toggle();
    },
    async sendToSlack(question, answer) {
      try {
        const url =
          "https://hooks.slack.com/services/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";
        const data = {
          type: "mrkdwn",
          text: "A user submitted the form without the question",
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*${new Date().toString()}*`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Question*: ${question}`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Answer*: ${answer}`
              }
            }
          ]
        };
        await axios.post(url, JSON.stringify(data), {
          withCredentials: false,
          transformRequest: [
            (data, headers) => {
              delete headers.post["Content-Type"];
              return data;
            }
          ]
        });
      } catch (error) {
        return error;
      }
    }
  },
  computed: {
    disableBtn() {
      return (
        this.question !== null &&
        this.question.length > 0 &&
        !this.question.match(this.regex)
      );
    },
    state() {
      if (this.question === null) {
        return null;
      } else if (this.question.length === 0) {
        return false;
      } else if (this.question.match(this.regex)) {
        return false;
      } else {
        return true;
      }
    },
    invalidFeedback() {
      if (this.question === null) {
        return "";
      } else if (this.question.length > 0 && this.question.match(this.regex)) {
        return "Gotta ask a yes/no question!";
      } else if (this.question.length > 0 && !this.question.match(this.regex)) {
        return "";
      } else {
        return "Gotta enter something!";
      }
    }
  }
};
