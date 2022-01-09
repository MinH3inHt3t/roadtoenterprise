<template>
  <div id="todo-list-app">
    <ol>
      <!--
      Now we provide each todo-item with the todo object
      it's representing, so that its content can be dynamic.
      We also need to provide each component with a "key",
      which will be explained later.
    -->
      <Todo_Item
        v-for="item in groceryList"
        v-bind:todo="item"
        :key="item.id"
      ></Todo_Item>
    </ol>
  </div>
</template>

<script>
import Todo_Item from "./Todo-Item.vue";

export default {
  name: "Todo_List",
  components: {
    Todo_Item,
  },

  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
};
</script>