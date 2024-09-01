<template>
  <div class="app">
    <h1>待辦事項應用</h1>
    <TodoForm :add-todo="addTodo" />
    <TodoList :todos="todos" :toggle-todo="toggleTodo" />
    <div class="stats">
      <p>已完成: {{ completedTodos.length }}</p>
      <p>未完成: {{ incompleteTodos.length }}</p>
    </div>
  </div>
</template>

<script setup>
import { useTodos } from './js/useTodos'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

const { todos, addTodo, toggleTodo, completedTodos, incompleteTodos } = useTodos()
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.stats {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>