<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :toggle-todo="toggleTodo"
    />
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import { defineProps } from 'vue'

defineProps({
  todos: Array,
  toggleTodo: Function
})
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
</style>