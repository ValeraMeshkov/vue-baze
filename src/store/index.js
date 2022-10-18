import { createStore } from 'vuex';

import state from './state';
import mutations from './mutations';
import actions from './actions';

import canvas1 from './modules/canvas1';

export default createStore({
  namespaced: true,
  state,
  mutations,
  actions,
  modules: {
    canvas1,
  },
});
