export default {
  getNews: ({ commit }) => {
    commit('GET_NEWS_REQUEST');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 500)
    })
      .then(() => commit('GET_NEWS_SUCCESS', { msg: 'hello' }))
      .catch(() => commit('GET_NEWS_ERROR'));
  },
};