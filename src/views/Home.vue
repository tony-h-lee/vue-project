<template>
  <div class="home">
    <h1> The Vue Project </h1>
    <p> Now with both news and cats! </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
