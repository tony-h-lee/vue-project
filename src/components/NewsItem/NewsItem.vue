<template>
  <div>
    {{ $route.params.id }}
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
