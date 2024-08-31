<template>
  <div class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import TodoItem from './TodoItem.vue'

const todos = inject('todos')
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
</style>