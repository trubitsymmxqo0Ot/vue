<script>
import AppNews from "./components/AppNews.vue";
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      counterRead: 0,
      news: [
        { id: 0, title: "Какая-то новость 1", isOpen: false, wasRead: false },
        { id: 1, title: "Новая новость 2", isOpen: false, wasRead: false },
        {
          id: 2,
          title: "Ну точно новая новость 3",
          isOpen: false,
          wasRead: false,
        },
        {
          id: 3,
          title: "Самая новая новость!! 4",
          isOpen: false,
          wasRead: false,
        },
      ],
    };
  },
  components: {
    // AppNews,
    // AppNews: AppNews,
    "app-news": AppNews,
  },
  methods: {
    openNews(data, data2) {
      this.openRate++;
      console.log(data, data2);
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id);
      this.news[idx].wasRead = true;
      this.counterRead++;
    },
    unreadNews(id){
      const idx = this.news.findIndex(news => news.id === id);
      this.news[idx].wasRead = false;
      this.counterRead--;
    }
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">Новости на {{ now }}</h1>
    <span class="title__text">Новость была открыта {{ openRate }} раз</span>
    <span class="title__text">Прочитано новостей {{ counterRead }} </span>
    <app-news
      v-for="items in news"
      :key="items.id"
      :title="items.title"
      :id="items.id"
      :is-open="items.isOpen"
      :was-read="items.wasRead"
      @open-flag="openNews"
      @mark-news="readNews"
      @unmark-news="unreadNews"
    ></app-news>
    <!-- title="Статичные данные" так мы бы передали пропс со статикой -->
    <!-- <AppNews /> Если у нас camelCase, то тогда нужно использовать такой тег -->
  </div>
</template>

<style scoped></style>
