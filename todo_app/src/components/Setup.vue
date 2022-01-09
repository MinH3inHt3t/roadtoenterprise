<template>
  <h2>{{ getGreeting }}</h2>
  <button @click="updateGreeting">Update greeting!</button>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Setup",
  setup() {
    let getGreeting = ref("Hello World!");
    // method responsible for updating the getGreeting ref value
    const updateGreeting = () => {
      getGreeting.value = "Welcome to the app!";
      console.log(getGreeting);
      return getGreeting;
    };
    return {
      getGreeting,
      updateGreeting,
    };
  },
};
</script>