import {defineStore} from 'pinia'

export const todoStore = defineStore('todo', {
  state: () => ({
    todos: [
      { id: 1, text: '學習 Vue 3', completed: false },
      { id: 2, text: '創建一個待辦事項應用', completed: true },
    ]
  }),
  getters: {
    completedTodos: (state) => state.todos.filter(todo => todo.completed),
    incompleteTodos: (state) => state.todos.filter(todo => !todo.completed),
  },
  actions: {
    addTodo(text) {
      const newTodo = {
        id: this.todos.length + 1,
        text,
        completed: false
      }
      this.todos.push(newTodo)
    },
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})