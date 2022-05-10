import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, title: "Recolectar las piedras del infinito", completed: false },
      { id: 2, title: "Piedra del alma", completed: true },
      { id: 3, title: "Piedra de poder", completed: false },
      { id: 4, title: "Piedra del tiempo", completed: true },
      {
        id: 5,
        title: "Conseguir nuevos secuaces competentes",
        completed: false,
      },
    ],
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex(todo => todo.id === id);
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    }
  },
  actions: {},
  getters: {
    allTodos: (state) => state.todos,
    pendingTodos(state) {
      return state.todos.filter((todo) => !todo.completed);
    },
    completedTodos: (state) => state.todos.filter((todo) => todo.completed),
    geTodosByTab: (_, getters) => (tab) => {
      if (tab === "completed") {
        return getters.completedTodos;
      }
      if (tab === "pending") {
        return getters.pendingTodos;
      }

      return getters.allTodos;
    },
  },
  modules: {},
});
