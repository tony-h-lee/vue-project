export default {
  GET_NEWS_ITEM_REQUEST: ({ newsItem }) => {
    newsItem.loading = true;
    newsItem.error = false;
  },
  GET_NEWS_ITEM_SUCCESS: ({ newsItem }, data) => {
    newsItem.loading = false;
    newsItem.error = false;
    newsItem.data = data;
  },
  GET_NEWS_ITEM_ERROR: ({ newsItem }, error) => {
    newsItem.loading = false;
    newsItem.error = error;
  },
};