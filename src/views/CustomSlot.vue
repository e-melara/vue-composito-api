<template>
  <h2>Aprediendo el Slot</h2>
  <button @click="openModal">Abrir Modal</button>

  <Modal v-if="isOpen" @on:close="closeModal" title="Otro titulo">
    <template v-slot:header>
      <h2>Titulo del Modal</h2>
    </template>

    <template v-slot:body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
      </p>
    </template>

    <template v-slot:exposed='slotProps'>
      {{ slotProps }}
    </template>

    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>
  </Modal>
</template>

<script>
import { ref } from "vue";

import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

<style scoped></style>