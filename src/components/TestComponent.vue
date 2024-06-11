<script setup lang="ts">
defineProps<{
  number: number;
}>();
</script>

<template>
  <div>
    {{ number }}
  </div>
</template>
