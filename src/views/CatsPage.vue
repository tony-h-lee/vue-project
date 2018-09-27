<template>
  <div class="page-wrapper">
    <Cats />
  </div>
</template>

<script>
import Cats from '@/components/Cats/Cats.vue';

export default {
  name: 'CatsPage',
  components: {
    Cats,
  }
}
</script>