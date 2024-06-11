<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function plus() {
  count.value++;
}
</script>

<template>
  <div>
    <div>composition api test</div>
    <button @click="plus">+</button>
    {{ count }}
  </div>
</template>
