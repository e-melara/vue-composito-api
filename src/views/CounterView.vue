<template>
  <h1>Counter View</h1>
  <h5>{{ counter }}</h5>
  <button @click="increase">+1</button>
  <button @click="decrement">-1</button>
</template>
<script>
import { onActivated, onDeactivated } from "@vue/runtime-core";
import useCounter from "../composables/useCounter";

export default {
  name: "CounterView",
  setup() {
    const { counter, increase, decrement } = useCounter(25);
    return {
      counter,
      increase,
      decrement,
    };
  },
};
</script>

<style></style>
