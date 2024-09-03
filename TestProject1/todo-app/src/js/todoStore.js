import {reactive } from 'vue';

export const todoStore = reactive({
  todos: [
    { id: 1, text: '學習 Vue 3', completed: false },
    { id: 2, text: '創建一個待辦事項應用', completed: true },
  ],
  
  completedTodosCount: function() {
    return this.todos.filter(todo => todo.completed).length;
  },
  
  incompleteTodosCount: function() {
    return this.todos.filter(todo => !todo.completed).length;
  },
  
  addTodo: function(text) {
    this.todos.push({
      id: this.todos.length + 1,
      text,
      completed: false
    });
  },
  toggleTodo: function(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
});