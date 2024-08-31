<template>
  <div class="app">
    <h1>待辦事項應用</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'

const todos = ref([
  { id: 1, text: '學習 Vue 3', completed: false },
  { id: 2, text: '創建一個待辦事項應用', completed: true },
])

const addTodo = (text) => {
  const newTodo = {
    id: todos.value.length + 1,
    text,
    completed: false
  }
  todos.value.push(newTodo)
}

const toggleTodo = (id) => {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

provide('todos', todos)
provide('addTodo', addTodo)
provide('toggleTodo', toggleTodo)
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
</style>