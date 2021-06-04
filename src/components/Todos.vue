<template>
  <div class="list-of-item">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
    },
  },
  methods: {
    removeTodo(id) {
      this.todos.splice(id, 1);
    },
  },
};
</script>

<style>
.list-of-item {
  border: 1px solid green;
  width: 50%;
  margin: 50px auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  height: 500px;
  overflow-y: auto;
}

li {
  border: 1px solid blue;
  width: 90%;
  margin: 5px auto;
  padding: 8px;
}
</style>
