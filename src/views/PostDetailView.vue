<script setup lang="ts">
import { getPostDetail } from "@/apis/api";
import { onMounted, ref } from "vue";

const { id } = defineProps<{ id: string }>();
const detailData = ref<{ title: string; content: string; id: string } | null>(
  null
);

onMounted(async () => {
  const res = await getPostDetail(id);
  detailData.value = res.data;
});
</script>

<template>
  <div class="container">
    <div class="title">{{ detailData?.title }}</div>
    <div class="content">{{ detailData?.content }}</div>
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
}

.title {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}

.container {
  font-size: 15px;
}
</style>
