<template>
  <div>
    <div v-if="hackerNews.loading">
      Loading
    </div>
    <div v-else-if="hackerNews.data">
      <router-link
              v-for="feedItem in hackerNews.data"
              :to="`/news/${feedItem.id}`"
      >
        <div class="feedItem" >
          <h3> {{ feedItem.title }} </h3>
          <p> By {{ feedItem.user }} </p>
          <p> Published {{ moment.unix(feedItem.time).format('MMMM Do YYYY') }}</p>
        </div>
      </router-link>
    </div>
    <div v-else-if="hackerNews.error">
      {{ hackerNews.error }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import moment from 'moment';
export default {
  name: 'HackerNews',
  data () {
    return {
      moment,
    }
  },
  mounted() {
    this.getNews()
  },
  computed: {
    ...mapState([
      'hackerNews'
    ])
  },
  methods: {
    ...mapActions([
      'getNews'
    ])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
  }
  .feedItem {
    position: relative;
    padding: 1rem 2rem;
    background: #fff;
    border: 1px solid #ededed;
    box-shadow: 1px 1px 3px #eee;
  }
  .feedItem:hover, .feedItem:active {
    transition: 0.1s;
    top: -2px;
    box-shadow: 1px 1px 5px #bbb;
  }
  h3 {
    margin: 1rem 0;
    color: #333;
  }
  p {
    font-size: 0.9rem;
    color: #888;
    margin: 0 0 0.3rem 0;
  }
  p:last-child {
    margin-bottom: 1rem;
  }
</style>
