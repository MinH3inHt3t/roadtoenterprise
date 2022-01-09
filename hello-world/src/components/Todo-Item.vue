<template>
  <li>{{ todo.text }}</li>
</template>

<script>
export default {
  name: "Todo_Item",
  props: ["todo"],
};
</script>

<style scoped>
li {
  color: cornflowerblue;
}
</style>