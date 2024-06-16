<script setup lang="ts">
import router from "@/router";

interface Props {
  id: string;
  title: string;
  content: string;
}

const { title, content } = defineProps<Props>();

const moveToDetailPage = (id: string) => {
  router.push({ name: "PostDetail", params: { id } });
};
</script>

<template>
  <div class="box" @click="moveToDetailPage(id)">
    <div class="title">{{ title }}</div>
    <p class="content">{{ content }}</p>
  </div>
</template>

<style scoped>
.box {
  display: inline-block;
  background-color: aliceblue;
  padding: 10px;
  border-radius: 20px;
}

.title {
  font-size: 30px;
  text-align: center;
}

.content {
  font-size: 16px;
}
</style>
