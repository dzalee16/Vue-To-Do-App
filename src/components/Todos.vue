<template>
  <div class="list-items">
    <ul>
      <Todo v-for="todo in todos" :key="todo.id" :todo="todo"></Todo>
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo";
import * as types from "../store/types";
export default {
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.getters[types.TODOS];
    },
  },
};
</script>

<style scoped>
.list-items {
  border: 1px solid gold;
  padding: 10px;
  max-height: 400px;
  overflow-y: scroll;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}
</style>
