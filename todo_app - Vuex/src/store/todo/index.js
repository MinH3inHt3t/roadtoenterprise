
const state = {
    todoList: [

    ],
    filter: -1,
}

const mutations = {

    ADD_TODO(state, payload) {
        state.todoList.push(payload)
    },

    EDIT_TODO(state, payload) {

        let idx = state.todoList.map((todo) => todo.id).indexOf(payload.id);
        console.log(idx);
        state.todoList[idx] = payload;

    },

    DELETE_TODO(state, id) {
        const todoObjList = state.todoList.filter((todo) => todo.id !== id);
        state.todoList = todoObjList;
    },

    COMPLETE_TODO(state, payload) {

        let todoObj = state.todoList.find((todo) => todo.id === payload.id);
        todoObj.done = payload.isComplete;
    },

    CHANGE_FILTER(state, payload) {
        state.filter = payload
    },

    CLEAR_COMPLETE(state) {
        state.todoList = state.todoList.filter((todo) => !todo.done)

    }



}

const actions = {

    addToDo({ commit }, todoItem) {
        commit('ADD_TODO', todoItem);
    },
    editToDo({ commit }, todoItem) {
        commit('EDIT_TODO', todoItem);
    },
    deleteToDo({ commit }, id) {
        commit('DELETE_TODO', id);
    },
    completeTodo({ commit }, payload) {
        console.log(payload)
        commit('COMPLETE_TODO', payload);
    },

    changeFilter({ commit }, payload) {
        commit('CHANGE_FILTER', payload);
    },

    clearComplete({ commit }) {
        commit('CLEAR_COMPLETE');
    }




}

const getters = {

    todoList: state => state.todoList,
    todoLength: state => state.todoList.length,
    visisbleTodos: state => {
        if (state.filter == 1) {
            return state.todoList.filter((todo) => todo.done == true)
        }
        else if (state.filter == 0) {
            return state.todoList.filter((todo) => todo.done == false)
        } else {
            return state.todoList;
        }

    }

}

const todoModule = {
    state,
    mutations,
    actions,
    getters
}

export default todoModule;