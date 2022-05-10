import { ref, computed } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");

  return {
    // variables
    currentTab,
    pendings: computed(() => store.getters['pendingTodos'] ),
    filter: computed(() => store.getters['geTodosByTab'](currentTab.value) ),

    // metodos o getters
    toggleTodo: (id) => store.commit('toggleTodo', id),
  }
};

export default useTodos;
