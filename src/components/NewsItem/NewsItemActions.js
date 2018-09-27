import axios from 'axios';

export default {
  getNewsItem: ({ commit }, id) => {
    commit('GET_NEWS_ITEM_REQUEST');
    return axios
      .get(`https://api.hnpwa.com/v0/item/${id}.json`)
      .then((response) => commit('GET_NEWS_ITEM_SUCCESS', response.data))
      .catch((error) => commit('GET_NEWS_ITEM_ERROR', error));
  },
};