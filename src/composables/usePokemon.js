import axios from "axios";
import { ref } from "vue";

const usePokemon = (pokemonId = 1) => {
  const pokemon = ref();
  const isLoading = ref(false);
  const errorMessage = ref(null);

  const fetchPokemon = async (pokemonId) => {
    if (!pokemonId) return;
    pokemon.value = null;
    isLoading.value = true;

    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      pokemon.value = data;
      errorMessage.value = null;
    } catch (error) {
      errorMessage.value = "No se pudo cargar el pokemon";
    } finally {
      isLoading.value = false;
    }
  };

  fetchPokemon(pokemonId);

  return {
    pokemon,
    isLoading,
    errorMessage,
    fetchPokemon,
  };
};

export default usePokemon;
