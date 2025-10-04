<script>
import AppNews from "./components/AppNews.vue";
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        { id: 0, title: "Какая-то новость 1", },
        { id: 1, title: "Новая новость 2", },
        { id: 2, title: "Ну точно новая новость 3", },
        { id: 3, title: "Самая новая новость!! 4", },
      ],
    };
  },
  components: {
    // AppNews,
    // AppNews: AppNews,
    "app-news": AppNews,
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">Новости на {{ now }}</h1>
    <app-news
      v-for="items in news"
      :key="items.id"
      :title="items.title"
      :id="items.id"
    ></app-news>
    <!-- title="Статичные данные" так мы бы передали пропс со статикой -->
    <!-- <AppNews /> Если у нас camelCase, то тогда нужно использовать такой тег -->
  </div>
</template>

<style scoped></style>
