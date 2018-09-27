<template>
  <div>
    <div v-if="newsItem.loading">
      Loading
    </div>
    <div v-else-if="newsItem.error">
      {{ newsItem.error }}
    </div>
    <div v-else class="article">
      <h2> {{ newsItem.data.title }} </h2>
      <p> By {{ newsItem.data.user }} </p>
      <p> Published {{ moment.unix(newsItem.data.time).format('MMMM Do YYYY') }}</p>
      <p> {{ newsItem.data.points }} Points </p>
      <div class="comments-wrapper">
        <h3> Comments </h3>
        <div class="comment" v-for="comment in newsItem.data.comments">
          <h5> {{ comment.user }} said:</h5>
          <div v-html="comment.content" />
        </div>
      </div>
      <div class="json">
        <h5> Raw JSON </h5>
        {{ JSON.stringify(newsItem.data) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import moment from 'moment';
export default {
  name: 'NewsItem',
  data () {
    return {
      moment,
    }
  },
  mounted() {
    this.getNewsItem(this.$route.params.id)
  },
  computed: {
    ...mapState([
      'newsItem'
    ])
  },
  methods: {
    ...mapActions([
      'getNewsItem'
    ])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .article {
    padding: 0.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  h2 {
    margin-bottom: 0.7rem;
  }
  p {
    margin: 0 0 0.5rem 0;
  }
  .json {
    border: 1px solid #ddd;
    padding: 0 2rem 2rem 2rem;
    margin: 2rem 0;
    background: #f5f5f5;
  }
  .comment {
    text-align: left;
    margin-bottom: 3rem;
  }
  .comments h5 {
    margin-bottom: 0.1rem;
  }
</style>
