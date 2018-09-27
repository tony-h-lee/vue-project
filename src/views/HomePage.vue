<template>
  <div class="home">
    <div class="home-message">
      <h1> The Vue Project </h1>
      <p> Now with both news and cats! </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style scoped>
  .home {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home-message {
    margin-top: -6rem;
    text-align: center;
  }
</style>