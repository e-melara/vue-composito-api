import axios from "axios";
import { ref } from "vue";

const useUsers = (params = {}) => {
  const users = ref([]);
  const isLoading = ref(false);

  const pagination = ref({
    page: 0,
    total: 0,
    per_page: 6,
    total_pages: 0,
  });

  const fetchUsers = async (page = 1, params = {}) => {
    if (page === 0) page = 1;
    isLoading.value = true;
    const { data } = await axios.get(`https://reqres.in/api/users`, {
      params: { page, ...params },
    });
    users.value = data.data;
    pagination.value = {
      page: data.page,
      total: data.total,
      per_page: data.per_page,
      total_pages: data.total_pages,
    };
    isLoading.value = false;
  };

  fetchUsers(1, params);

  return {
    users,
    isLoading,
    pagination,

    // Metodos
    nextPage: async () => fetchUsers(pagination.value.page + 1, params),
    prevPage: async () => fetchUsers(pagination.value.page - 1, params),
  };
};

export default useUsers;
