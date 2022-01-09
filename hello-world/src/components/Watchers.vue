<template>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>


<script>
const axios = require("axios");
export default {
  name: "Watchers",
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
    };
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
  },
  methods: {
    getAnswer() {
      this.answer = "Thinking...";
      axios
        .get("https://yesno.wtf/api")
        .then((response) => {
          this.answer = response.data.answer;
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
};
</script>