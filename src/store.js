import Vue from 'vue';
import Vuex from 'vuex';

// Components
import HackerNewsActions from '@/components/HackerNews/HackerNewsActions';
import HackerNewsMutations from '@/components/HackerNews/HackerNewsMutations';
import HackerNewsState from '@/components/HackerNews/HackerNewsState';
import NewsItemActions from '@/components/NewsItem/NewsItemActions';
import NewsItemMutations from '@/components/NewsItem/NewsItemMutations';
import NewsItemState from '@/components/NewsItem/NewsItemState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...HackerNewsState,
    ...NewsItemState,
  },
  mutations: {
    ...HackerNewsMutations,
    ...NewsItemMutations,
  },
  actions: {
    ...HackerNewsActions,
    ...NewsItemActions,
  }
});
