<script>
import AppNews from "./components/AppNews.vue";
export default {
  data() {
    return {
      now: new Date().toLocaleDateString()
    };
  },
  components: {
    // AppNews,
    // AppNews: AppNews,
    "app-news": AppNews
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">Новости на {{ now }}</h1>
    <app-news></app-news>
    <app-news></app-news>
    <app-news></app-news>
    <app-news></app-news>
    <app-news></app-news>
    <app-news></app-news>
    <!-- <AppNews /> Если у нас camelCase, то тогда нужно использовать такой тег -->
  </div>
</template>

<style scoped></style>
