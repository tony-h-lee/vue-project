export default {
  GET_CAT_REQUEST: ({ cats }) => {
    cats.loading = true;
    cats.error = false;
    cats.data = false;
  },
  GET_CAT_SUCCESS: ({ cats }, data) => {
    cats.loading = false;
    cats.error = false;
    cats.data = data;
  },
  GET_CAT_ERROR: ({ cats }, error) => {
    cats.loading = false;
    cats.error = error;
  },
};