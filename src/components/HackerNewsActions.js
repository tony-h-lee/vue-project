import axios from 'axios';

export default {
  getNews: ({ commit }) => {
    commit('GET_NEWS_REQUEST');
    return axios
      .get('https://api.hnpwa.com/v0/news/1.json')
      .then((response) => commit('GET_NEWS_SUCCESS', response.data))
      .catch((error) => commit('GET_NEWS_ERROR', error));
  },
};