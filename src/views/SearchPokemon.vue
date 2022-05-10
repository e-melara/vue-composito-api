<template>
  <h1>Buscar pokemon:</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      v-model="pokemonId"
      placeholder="Numero del pokemon"
      ref="txtSearchInput"
    />
  </form>
  <br />
  <span>Preciones enter para buscar</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const pokemonId = ref(1);
    const router = useRouter();
    const txtSearchInput = ref();

    const onSubmit = (e) => {
      router.push({ name: "pokemon-view", params: { id: pokemonId.value } });
    };

    onActivated(() => {
      txtSearchInput.value.select();
    });

    return {
      pokemonId,
      txtSearchInput,
      onSubmit,
    };
  },
};
</script>

<style></style>
