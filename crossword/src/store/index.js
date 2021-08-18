import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    answers: [],
  },
  mutations: {
    updateAnswers(state, payload) {
      state.answers = payload;
    },
  },
  actions: {},
  modules: {},
});
