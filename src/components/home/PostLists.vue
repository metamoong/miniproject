<script setup lang="ts">
import { onMounted, ref } from "vue";
import PostBox from "./PostBox.vue";
import { getPosts } from "@/apis/api";

const postList = ref<{ id: string; title: string; content: string }[]>([]);

onMounted(async () => {
  const res = await getPosts();
  postList.value = res.data;
});
</script>

<template>
  <div class="container">
    <PostBox
      v-for="post in postList"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :content="post.content"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: rgb(255, 247, 247);

  box-sizing: border-box;
  padding: 30px;
  height: 80vh;
  width: 50vw;
  margin: auto;

  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
