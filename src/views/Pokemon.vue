<template>
  <h1 v-if="isLoading">Buscando ...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <router-link :to="{ name: 'pokemon-search' }">Search</router-link>
  </template>
</template>

<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "../composables/usePokemon";

export default {
  setup() {
    const route = useRoute();
    const { pokemon, fetchPokemon, isLoading, errorMessage } = usePokemon(
      route.params.id
    );

    watch(
      () => route.params.id,
      () => fetchPokemon(route.params.id)
    );

    onBeforeRouteLeave(() => {
      const answer = window.confirm("¿Esta seguro que desea salir?");
      return answer;
    });

    return {
      pokemon,
      isLoading,
      errorMessage,
    };
  },
};
</script>

<style></style>
