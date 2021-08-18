import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    answers: {},
  },
  mutations: {
    updateAnswers(state, payload) {
      const id = payload.id;
      const content = payload.content;

      state.answers[id] = content;
    },
  },
  actions: {},
  modules: {},
});
