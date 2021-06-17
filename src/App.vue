<template>
  <div id="app">
    <h1>To Do App</h1>
    <CreateTodo />
  </div>
</template>

<script>
import CreateTodo from "./components/CreateTodo.vue";
export default {
  components: {
    CreateTodo,
  },
};
</script>

<style>
body {
  background: rgb(230, 219, 219);
}
h1 {
  text-align: center;
  color: blue;
}
</style>
