<template>
  <div class="appContainer">
    <h1 class="todoLabel">TODO App</h1>
    <Todo_List />

    <!-- <Scoped_Slot>
      <template v-slot:default="slotProps">
        <i class="fas fa-check"></i>
        <span class="green">{{ slotProps.item }}</span>
      </template>
    </Scoped_Slot> -->
    <!-- <Scoped_Slot>
      <template v-slot:default="slotProps">
        <i class="fas fa-car"></i>
        <span class="green">{{ slotProps.item }}</span>
      </template>
    </Scoped_Slot> -->
  </div>
</template>

<script>
import Todo_List from "./components/Todo_List.vue";
// import Scoped_Slot from "./components/Scoped_Slot.vue";
export default {
  name: "App",
  components: {
    Todo_List,
    // Scoped_Slot,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.appContainer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.todoLabel {
  font-size: 3rem;
  font-weight: 800;
}
</style>