export default {
  GET_NEWS_REQUEST: ({ hackerNews }) => {
    hackerNews.loading = true;
    hackerNews.error = false;
  },
  GET_NEWS_SUCCESS: ({ hackerNews }, data) => {
    hackerNews.loading = true;
    hackerNews.error = false;
    hackerNews.data = data;
  },
  GET_NEWS_ERROR: ({ hackerNews }, error) => {
    hackerNews.loading = true;
    hackerNews.error = error;
  },
};