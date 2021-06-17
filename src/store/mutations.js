import * as types from "./types";

export default {
  [types.MUTATE_VALUE](state, payload) {
    state.value = payload;
  },
  [types.MUTATE_ADD_TODO](state, payload) {
    if (state.value === null || state.value === "") {
      state.errorMsg = "Enter Todo";
    } else {
      state.todos.push(payload);
      state.value = null;
      state.errorMsg = null;
    }
  },
  [types.MUTATE_DELETE_TODO](state, id) {
    let newTodos = [];
    newTodos = state.todos.filter((todo) => todo.id !== id);
    state.todos = newTodos;
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  [types.MUTATE_EDIT_TODO](state, id) {
    state.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.disabled = !todo.disabled;
      }
    });
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  [types.MUTATE_COMPLETE_TODO](state, id) {
    state.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
};
