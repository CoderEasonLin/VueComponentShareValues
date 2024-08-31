
/* eslint-disable */
<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)">
    <span>{{ todo.text }}</span>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { defineProps } from 'vue'
defineProps({
  todo: {
    type: Object,
    required: true
  }
});
const toggleTodo = inject('toggleTodo')
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.todo-item.completed span {
  text-decoration: line-through;
  color: #888;
}
.todo-item input {
  margin-right: 10px;
}
</style>