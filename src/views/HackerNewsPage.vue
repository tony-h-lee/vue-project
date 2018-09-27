<template>
  <div class="page-wrapper">
    <HackerNews />
  </div>
</template>

<script>
import HackerNews from '@/components/HackerNews/HackerNews.vue';

export default {
  name: 'HackerNewsPage',
  components: {
    HackerNews,
  }
}
</script>