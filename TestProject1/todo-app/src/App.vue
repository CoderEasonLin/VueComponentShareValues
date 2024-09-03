<template>
  <div class="app">
    <h1>待辦事項應用</h1>
    <TodoForm />
    <TodoList />
    <div class="stats">
      <p>已完成: {{ completedTodos.length }}</p>
      <p>未完成: {{ incompleteTodos.length }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

const store = useStore()
const completedTodos = computed(() => store.getters.completedTodos)
const incompleteTodos = computed(() => store.getters.incompleteTodos)
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