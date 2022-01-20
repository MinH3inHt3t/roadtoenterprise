<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <AnimalApiExample />
  <SearchMealExample />
  <!-- <ToggleExample /> -->
  <TagsExample />
</template>

<script>
import AnimalApiExample from "./views/AnimalApiExample.vue";
import SearchMealExample from "./views/SearchMealExample.vue";
// import ToggleExample from "./views/ToggleExample.vue";
import TagsExample from "./views/TagsExample.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    AnimalApiExample,
    SearchMealExample,
    // ToggleExample,
    TagsExample,
    // HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
