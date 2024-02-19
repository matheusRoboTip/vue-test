// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isChecked: false,
  },
  mutations: {
    setChecked(state, value) {
      state.isChecked = value;
    },
  },
});

export default store;
