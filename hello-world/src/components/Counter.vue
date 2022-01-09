<template>
  <div id="counter">Counter: {{ counter }}</div>

  <div id="counter">Msg: {{ msg }}</div>

  <div id="bind-attribute">
    <span v-bind:title="counter">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </div>

  <div id="event-handling">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>

  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>

  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>


<script>
export default {
  name: "Counter",
  props: {
    msg: String,
  },

  data() {
    return {
      counter: 0,
      message: "You loaded this page on " + new Date().toLocaleString(),
      seen: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },

  beforeUpdate() {
    console.log(this.counter);
  },

  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>
