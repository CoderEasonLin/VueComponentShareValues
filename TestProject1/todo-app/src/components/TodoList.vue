<template>
  <div class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TodoItem from './TodoItem.vue'

const store = useStore()
const todos = computed(() => store.state.todos)
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
</style>