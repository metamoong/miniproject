<script setup lang="ts">
import router from "@/router";

const moveToNewPostPage = () => {
  router.push({ name: "NewPost" });
};
</script>

<template>
  <header>
    <div>VUE로 만드는 게시판</div>
    <button @click="moveToNewPostPage">+</button>
  </header>
</template>

<style scoped>
header {
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 50px;
}
</style>
