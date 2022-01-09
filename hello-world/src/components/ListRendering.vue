<template >
  <div v-for="todo in todos" :key="todo.text">
    <Counter :msg="todo.text" />
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  name: "ListRendernig",
  components: {
    // HelloWorld,
    Counter,
  },
  data() {
    return {
      todos: [
        {
          text: "Learn JavaScript",
        },
        {
          text: "Learn Vue",
        },
        {
          text: "Build something awesome",
        },
      ],
    };
  },
};
</script>

<style>
</style>
