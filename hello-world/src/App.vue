<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Counter msg="this is msg from app" /> -->
  <!-- <ListRendering /> -->
  <!-- <Todo_List /> -->
  <!-- <Computed_Properties /> -->
  <Watchers />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Counter from "./components/Counter.vue";
// import ListRendering from "./components/ListRendering.vue";
// import Todo_List from "./components/Todo-List.vue";
// import Computed_Properties from "./components/Computed-Properties.vue";
import Watchers from "./components/Watchers.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Counter,
    // ListRendering,
    // Todo_List,
    // Computed_Properties,
    Watchers,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
