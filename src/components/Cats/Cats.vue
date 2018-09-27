<template>
  <div>
    <div v-if="cats.loading" class="loading">
      <h1> Loading </h1>
    </div>
    <div v-if="cats.error">
      {{ cats.error }}
    </div>
    <div v-else-if="cats.data" class="cat-wrapper">
      <img :src="cats.data.file" />
      <button type="button" v-on:click="getCat">
        <h5>
          Anotha One
        </h5>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: 'Cats',
  mounted() {
    !this.cats.data ? this.getCat() : false;
  },
  computed: {
    ...mapState([
      'cats'
    ])
  },
  methods: {
    ...mapActions([
      'getCat'
    ])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading {
    text-align: center;
  }
  .cat-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  h5 {
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    outline: none;
    cursor: pointer;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    border: 1px solid #ddd;
    padding: 1rem 2rem;
    background: #eee;
    color: #333;
    font-size: 1rem;
    transition: 0.1s;
    box-shadow: 1px 1px 7px #777;
  }
  button:hover, button:focus {
    bottom: 1.07rem;
  }
  button:active {
    bottom: 0.93rem;
    box-shadow: 1px 1px 1px #444;
    background: #eaeaea;
  }
  button:focus {
    box-shadow: 1px 1px 5px #4286f4;
  }
</style>
