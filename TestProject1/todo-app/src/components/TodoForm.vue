<template>
  <form @submit.prevent="handleSubmit" class="todo-form">
    <input v-model="newTodo" placeholder="新增待辦事項..." />
    <button type="submit">新增</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { todoStore } from '@/stores/todoStore'

const store = todoStore()
const newTodo = ref('')

const handleSubmit = () => {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}
</script>

<style scoped>
.todo-form {
  margin-top: 20px;
  display: flex;
}
.todo-form input {
  flex-grow: 1;
  padding: 5px;
  font-size: 16px;
}
.todo-form button {
  padding: 5px 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>