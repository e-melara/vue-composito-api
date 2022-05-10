<template>
  <h1>Lista de tareas de Thano</h1>
  <h4>Tareas pendientes: {{ pendings.length }}</h4>
  <hr />
  <button @click="currentTab = 'all'" :class="{ active: currentTab === 'all' }">
    Todos
  </button>
  <button
    @click="currentTab = 'pending'"
    :class="{ active: currentTab === 'pending' }"
  >
    Pendientes
  </button>
  <button
    @click="currentTab = 'completed'"
    :class="{ active: currentTab === 'completed' }"
  >
    Completados
  </button>

  <div>
    <ul>
      <li
        :key="id"
        :class="{ completed: completed }"
        v-for="{ id, title, completed } in filter"
        @dblclick="toggleTodo(id)"
      >
        {{ title }}
      </li>
    </ul>
  </div>
</template>

<script>
import useTodos from "../composables/useTodos";

export default {
  name: "TodoView",
  setup() {
    const { currentTab, toggleTodo, filter, pendings } = useTodos();

    return {
      filter,
      pendings,
      currentTab,

      // metodos
      toggleTodo,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  text-align: center;
  justify-content: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  color: white;
  background-color: #2c3e50;
}

.completed {
  text-decoration: line-through;
}
</style>
