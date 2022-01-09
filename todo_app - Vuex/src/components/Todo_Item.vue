<template>
  <div :class="{ editing: id == editId }">
    <div class="item view">
      <input
        :id="id"
        type="checkbox"
        :checked="isDone"
        @change="completeTodo($event.target.checked, id)"
      />
      <label :for="id" @dblclick="editTodo(id)">{{ todoName }}</label>
      <button @click="deleteTodo(id)">Remove</button>
    </div>

    <div class="edit">
      <input
        type="text"
        v-model="editedText"
        @keyup.enter="emitUpdate(), (editId = -1)"
      />
    </div>
  </div>

  <slot></slot>
  <slot name="customSlot"></slot>
</template>


<script>
export default {
  props: ["id", "todoName", "isDone"],

  data() {
    return {
      editId: -1,
      editedText: "",
    };
  },
  name: "Todo_Item",
  emits: ["updateTodo"],
  methods: {
    completeTodo(isComplete, id) {
      console.log(isComplete + "  " + id);
      this.$store.dispatch("completeTodo", { id, isComplete });
    },

    deleteTodo(id) {
      this.$store.dispatch("deleteToDo", id);
    },

    editTodo(id) {
      this.editId = id;
      this.editedText = this.todoName;
    },

    emitUpdate() {
      let todoItem = {
        id: this.id,
        title: this.editedText,
        done: this.isDone,
      };

      this.$store.dispatch("editToDo", todoItem);
    },
  },
};
</script>

<style scoped>
div.item {
  height: 55px;
  background-color: #fbfbfd;
  display: grid;
  grid-template-columns: 10% 75% 15%;
}

label {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
}

button {
  display: inline;
  background-color: #e34140;
  border: darkslategrey;
  color: white;
  font-weight: normal;
}

div .edit {
  display: none;
}

.editing .edit {
  display: block;
  width: calc(100% - 43px);
  padding: 12px 16px;
  margin: 0 0 0 43px;
}

.editing .view {
  display: none;
}
</style>