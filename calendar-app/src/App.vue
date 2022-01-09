<template>
  <CalendarWeek />
</template>

<script>
import CalendarWeek from "./components/CalendarWeek.vue";
export default {
  name: "App",
  components: {
    CalendarWeek,
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
