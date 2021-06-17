<template>
  <div
    class="list-item-content"
    :class="{ 'list-item-content-completed': todo.completed }"
  >
    <input
      type="text"
      v-model="todo.name"
      :disabled="todo.disabled"
      :class="{ 'completed-input': todo.completed }"
    />
    <div class="btns">
      <button
        v-if="!todo.completed"
        class="btn-delete"
        @click.prevent="deleteTodo(todo.id)"
      >
        <i class="fas fa-trash"></i>
      </button>
      <button
        v-if="!todo.completed"
        class="btn-edit"
        @click.prevent="editTodo(todo.id)"
      >
        <i class="fas fa-edit"></i>
      </button>
      <button class="btn-check" @click.prevent="completeTodo(todo.id)">
        <i class="fas fa-check"></i>
      </button>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
export default {
  props: ["todo"],
  methods: {
    deleteTodo(id) {
      this.$store.dispatch(types.DELETE_TODO, id);
    },
    editTodo(id) {
      this.$store.dispatch(types.EDIT_TODO, id);
      console.log(id);
    },
    completeTodo(id) {
      this.$store.dispatch(types.COMPLETE_TODO, id);
      console.log(id);
    },
  },
};
</script>

<style scoped>
.list-item-content {
  display: flex;
  padding: 5px;
}

.list-item-content-completed {
  border: 1px solid black;
  border-radius: 30px;
  background: rgba(61, 57, 57, 0.4);
  box-shadow: inset 10px 10px 30px black;
}

.btns {
  width: 35%;
  display: flex;
  margin-left: 5px;
}

input {
  width: 100%;
  padding: 8px;
  color: rgb(6, 6, 80);
  border-radius: 30px;
  outline: none;
}

input:hover {
  border: 2px solid rgb(52, 52, 236);
  transition-delay: 0.8s;
}

.btn-delete {
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
  color: red;
}

.btn-delete:hover {
  opacity: 0.8;
  color: rgb(255, 255, 255);
  transition-duration: 0.8s;
  background: red;
  border-radius: 20px;
}

.btn-edit {
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
  color: rgb(28, 31, 1);
}

.btn-edit:hover {
  opacity: 0.8;
  color: rgb(182, 169, 169);
  transition-duration: 0.8s;
  background: rgb(109, 94, 9);
  border-radius: 20px;
}

.btn-check {
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
  color: rgb(12, 226, 12);
}

.btn-check:hover {
  opacity: 0.8;
  color: #fff;
  transition-duration: 0.8s;
  background: green;
  border-radius: 20px;
}

.completed-input {
  text-decoration: line-through;
}
</style>
