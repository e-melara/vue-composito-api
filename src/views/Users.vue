<template>
  <h2 v-if="isLoading">Espere ....</h2>
  <h2 v-else>Usuarios</h2>

  <div v-if="users.length > 0" class="main-container">
    <table class="table table-striped" border="1">
      <thead>
        <tr>
          <th>Primer Nombre</th>
          <th>Primer Apellido</th>
          <th>Correo Electronico</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ first_name, last_name, email, id } in users" :key="id">
          <td>{{ first_name }}</td>
          <td>{{ last_name }}</td>
          <td>{{ email }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination-container">
      <button :disabled="pagination.page === 1" @click="prevPage">Atras</button>
      <span>Pagina: {{ pagination.page }}</span>
      <button
        :disabled="pagination.page >= pagination.total_pages"
        @click="nextPage"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import useUsers from "../composables/useUsers";

export default {
  name: "Users",
  setup() {
    const { users, pagination, isLoading, nextPage, prevPage } = useUsers({
      per_page: 2
    });

    return {
      users,
      pagination,
      isLoading,

      // metodos
      nextPage,
      prevPage,
    };
  },
};
</script>

<style scoped>
.main-container {
  width: 600px;
  margin: 0 auto;
}
.main-container table {
  width: 100%;
}
.main-container .pagination-container {
  width: 100%;
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
}
</style>
