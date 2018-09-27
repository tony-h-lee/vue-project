<template>
  <div class="page-wrapper">
    <NewsItem />
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem/NewsItem.vue';

export default {
  name: 'NewsItemPage',
  components: {
    NewsItem,
  }
}
</script>