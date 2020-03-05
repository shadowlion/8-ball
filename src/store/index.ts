import Vue from "vue";
import Vuex, { GetterTree, MutationTree, ActionTree } from "vuex";
import answers from "../answers";
import { State } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: null,
    answer: null
  } as State,
  getters: {
    question: state => state.question,
    answer: state => state.answer,
    shaken: state => state.answer !== null
  } as GetterTree<State, any>,
  mutations: {
    SET_QUESTION(state, payload) {
      state.question = payload;
    },
    SET_ANSWER(state, payload) {
      state.answer = payload;
    }
  } as MutationTree<State>,
  actions: {
    setQuestion({ commit }, payload) {
      commit("SET_QUESTION", payload);
    },
    setAnswer({ commit }) {
      const index = Math.floor(Math.random() * answers.length);
      commit("SET_ANSWER", answers[index]);
    },
    resetForm({ commit }) {
      commit("SET_ANSWER", null);
      commit("SET_QUESTION", null);
    }
  } as ActionTree<State, any>
});
