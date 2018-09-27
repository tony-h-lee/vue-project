import Vue from 'vue';
import Vuex from 'vuex';

// Components
import HackerNewsActions from '@/components/HackerNews/HackerNewsActions';
import HackerNewsMutations from '@/components/HackerNews/HackerNewsMutations';
import HackerNewsState from '@/components/HackerNews/HackerNewsState';
import NewsItemActions from '@/components/NewsItem/NewsItemActions';
import NewsItemMutations from '@/components/NewsItem/NewsItemMutations';
import NewsItemState from '@/components/NewsItem/NewsItemState';
import CatsActions from '@/components/Cats/CatsActions';
import CatsMutations from '@/components/Cats/CatsMutations';
import CatsState from '@/components/Cats/CatsState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...HackerNewsState,
    ...NewsItemState,
    ...CatsState,
  },
  mutations: {
    ...HackerNewsMutations,
    ...NewsItemMutations,
    ...CatsMutations,
  },
  actions: {
    ...HackerNewsActions,
    ...NewsItemActions,
    ...CatsActions,
  }
});
