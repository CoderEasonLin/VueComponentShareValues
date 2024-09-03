import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: '學習 Vue 3', completed: false },
      { id: 2, text: '創建一個待辦事項應用', completed: true },
    ]
  },
  getters: {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    incompleteTodos: state => state.todos.filter(todo => !todo.completed),
  },
  mutations: {
    ADD_TODO(state, text) {
      state.todos.push({
        id: state.todos.length + 1,
        text,
        completed: false
      })
    },
    TOGGLE_TODO(state, id) {
      const todo = state.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
  actions: {
    addTodo({ commit }, text) {
      commit('ADD_TODO', text)
    },
    toggleTodo({ commit }, id) {
      commit('TOGGLE_TODO', id)
    }
  }
})