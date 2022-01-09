<template>
  <div>
    <section>
      <h2>Add Todo</h2>
      <div class="inputfield">
        <input
          type="text"
          v-model="newTodo"
          id="new-todo"
          @keyup.enter="addToDo"
          ref="input"
        />
        <button @click="addToDo">ADD</button>
      </div>
    </section>
    <div class="todoItemContainerParent">
      <div class="todoItemContainer">
        <Todo_Item
          v-for="todo in filterList"
          :key="todo.id"
          :id="todo.id"
          :todo-name="todo.title"
          :is-done="todo.done"
          @removeItem="removeItem(todo.id)"
          @completeItem="completeItem($event, todo.id)"
          @updateTodo="updateTodo($event, todo.id)"
        >
          <!-- {{ todo.done }} -->
          <!-- <template v-slot:customSlot>
            <h1>Here might be a page title</h1>
          </template> -->
        </Todo_Item>
      </div>
    </div>
  </div>

  <div class="filterSection">
    <TodoFooter />
    <p @click="showAll">All</p>
    <p @click="showActiveItems">Active</p>
    <p @click="showCompletedItems">Completed</p>
    <p @click="clearComplete">Clear Completed</p>
    <p @click="completeAll">Complete All</p>
  </div>
</template>

<script>
import Todo_Item from "./Todo_Item.vue";
import TodoFooter from "./Todo_Footer.vue";
import { computed } from "vue";
export default {
  name: "Todo_List",

  data() {
    return {
      todoList: [],
      newTodo: "",
      nextid: 0,
      filterList: [],
    };
  },
  provide() {
    return {
      todoListSize: computed(() => this.todoList.length),
    };
  },

  components: {
    Todo_Item,
    TodoFooter,
  },

  // computed: {
  //   // a computed getter
  //   getTodoListLength() {
  //     // `this` points to the vm instance
  //     return this.todoList.filter((item) => item.done == false).length;
  //   },
  // },
  mounted() {
    this.$refs.input.focus();
  },

  methods: {
    updateTodo(event, id) {
      // console.log(event + id);
      const todoObj = this.todoList.find((item) => item.id == id);
      todoObj.title = event;

      console.log(todoObj);
    },

    addToDo() {
      if (this.newTodo) {
        console.log("add");
        this.todoList.push({
          id: this.nextid++,
          title: this.newTodo,
          done: false,
        });
        this.filterList = this.todoList;
        this.newTodo = "";
      }
    },
    removeItem(id) {
      const idToRemove = id;
      this.todoList = this.todoList.filter((item) => item.id !== idToRemove);
      console.log(this.todoList);
      this.filterList = this.todoList;
    },

    completeItem(event, id) {
      const filterList = this.todoList.filter((item) => item.id == id);
      filterList[0].done = event;
    },

    showAll() {
      console.log("show all");
      this.filterList = this.todoList;
    },

    showActiveItems() {
      this.filterList = this.todoList.filter((item) => item.done == false);
    },

    showCompletedItems() {
      this.filterList = this.todoList.filter((item) => item.done == true);
    },

    clearComplete() {
      this.todoList = this.todoList.filter((item) => item.done == false);
      this.filterList = this.todoList;
    },

    completeAll() {
      if (this.getTodoListLength == 0) {
        this.todoList.forEach((item) => {
          item.done = false;
        });
      } else {
        this.todoList.forEach((item) => {
          item.done = true;
        });
      }

      this.filterList = this.todoList;
    },
  },
};
</script>

<style scoped>
section {
  width: 400px;
  height: 100px;
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
section h2 {
  font-weight: 800;
  color: white;
}

.inputfield {
  width: 100%;
  height: 55px;
  background-color: chocolate;
  display: grid;
  grid-template-columns: 85% 15%;
}
.inputfield input {
  padding: 0 10px;
  height: 55px;
  border: none;
  outline: none;
  font-size: 1.3rem;
  background-color: #f2f2f2;
}
.inputfield button {
  background-color: #2f55b1;
  border: darkslategrey;
  color: white;
  font-weight: 800;
}

.todoItemContainerParent {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.todoItemContainer {
  margin: 13px 0 0 0;
  width: 100%;
  height: 600px;

  overflow-y: auto;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box;
}

.filterSection {
  background-color: #f2f2f9;
  width: 400px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
}

.filterSection p {
  cursor: pointer;
}
</style>

