<template>
  <div>
    <h1>To Do App</h1>
    <p>{{ message }}</p>
    <form action="form" @submit.prevent="onSubmit">
      <input type="text" v-model="todosTitle" placeholder="Enter to-do's" />
      <input type="submit" value="Add" />
    </form>
    <!-- Component Todos   @remove-from-todos="removeFromTodos"-->
    <Todos v-bind:todos="todos"></Todos>
  </div>
</template>

<script>
import Todos from "./Todos.vue";

export default {
  name: "ToDo",
  components: {
    Todos,
  },
  data() {
    return {
      message: "Neka poruka",
      todosTitle: null,
      todos: [],
    };
  },
  methods: {
    onSubmit() {
      this.todos.push(this.todosTitle);
      this.todosTitle = null;
    },
    // removeFromTodos(id) {
    //   // this.todos.filter((todo, index) => index !== id);
    //   console.log(id);
    // },
  },
};
</script>
