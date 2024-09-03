<template>
  <div class="todo-list">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import { todoStore } from "@/js/todoStore"

</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
</style>