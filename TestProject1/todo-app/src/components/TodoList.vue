<template>
  <div class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { todoStore } from '@/stores/todoStore'
import TodoItem from './TodoItem.vue'

const store = todoStore()
const { todos } = storeToRefs(store)
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
</style>