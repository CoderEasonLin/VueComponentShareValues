import { ref, computed } from 'vue'

export function useTodos() {
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

  const completedTodos = computed(() => {
    return todos.value.filter(todo => todo.completed)
  })

  const incompleteTodos = computed(() => {
    return todos.value.filter(todo => !todo.completed)
  })

  return {
    todos,
    addTodo,
    toggleTodo,
    completedTodos,
    incompleteTodos
  }
}