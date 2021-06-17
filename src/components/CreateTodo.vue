<template>
  <div class="create-todo">
    <div class="err-msg">{{ errorMsg }}</div>
    <form>
      <div class="input-btn-container">
        <input type="text" v-model="value" />
        <button @click.prevent="addTodo">Add</button>
      </div>
      <Todos />
    </form>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import * as types from "../store/types";
import Todos from "../components/Todos.vue";
export default {
  components: {
    Todos,
  },
  computed: {
    value: {
      get() {
        return this.$store.getters[types.VALUE];
      },
      set(value) {
        this.$store.dispatch(types.UPDATE_VALUE, value);
      },
    },
    errorMsg() {
      return this.$store.getters[types.ERROR_MESSAGE];
    },
  },
  methods: {
    addTodo() {
      this.$store.dispatch(types.ADD_TODO, {
        name: this.value,
        id: uuid.v4(),
        disabled: true,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(this.$store.state.todos));
    },
  },
  created() {
    if (JSON.parse(localStorage.getItem("todos")) === null) {
      localStorage.setItem("todos", JSON.stringify(this.$store.state.todos));
    } else {
      this.$store.state.todos = JSON.parse(localStorage.getItem("todos"));
      localStorage.setItem("todos", JSON.stringify(this.$store.state.todos));
    }
  },
};
</script>

<style scoped>
form {
  border: 1px solid black;
  width: 45%;
  margin: 50px auto;
  background: rgb(110, 109, 109);
}

.input-btn-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

input {
  width: 70%;
  padding: 10px;
}

button {
  min-width: 20%;
  cursor: pointer;
}

.err-msg {
  color: red;
  font-size: 22px;
  text-align: center;
}
</style>
