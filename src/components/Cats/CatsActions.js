import axios from 'axios';

export default {
  getCat: ({ commit }) => {
    commit('GET_CAT_REQUEST');
    return axios
      .get('https://aws.random.cat/meow')
      .then((response) => commit('GET_CAT_SUCCESS', response.data))
      .catch((error) => commit('GET_CAT_ERROR', error));
  },
};