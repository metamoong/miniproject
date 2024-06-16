<script setup lang="ts">
import { createPosts } from "@/apis/api";
import { ref } from "vue";
const titleInput = ref("");
const contentInput = ref("");

const createNewPost = async () => {
  const res = await createPosts({
    title: titleInput.value,
    content: contentInput.value,
  });
};
</script>

<template>
  <div class="container">
    <input type="text" v-model="titleInput" />
    <textarea v-model="contentInput"></textarea>
    <button @click="createNewPost">POST</button>
  </div>
</template>

<style scoped>
.container {
  width: 50vw;
  height: 60vh;
  margin: auto;
  background-color: aliceblue;
  padding: 20px;
  border-radius: 20px;

  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

input {
  height: 40px;
  border: none;
  border-radius: 10px;
  width: 60%;
}

textarea {
  height: 400px;
  border: none;
  border-radius: 10px;
  width: 60%;
}

button {
  width: 100px;
  height: 40px;
  border-radius: 10px;
}
</style>
