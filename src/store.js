import Vue from 'vue';
import Vuex from 'vuex';

// Components
import HackerNewsActions from '@/components/HackerNewsActions';
import HackerNewsMutations from '@/components/HackerNewsMutations';
import HackerNewsState from '@/components/HackerNewsState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...HackerNewsState,
  },
  mutations: {
    ...HackerNewsMutations,
  },
  actions: {
    ...HackerNewsActions,
  }
});
