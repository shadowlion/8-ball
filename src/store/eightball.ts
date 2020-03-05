import { State } from './types';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import answers from "../answers";

export const state: State = {
  question: null,
  answer: null
};

export const getters: GetterTree<State, any> = {
  question: state => state.question,
  answer: state => state.answer,
  shaken: state => state.answer !== null
};

export const mutations: MutationTree<State> = {
  SET_QUESTION: (state, payload) => state.question = payload,
  SET_ANSWER: (state, payload) => state.answer = payload
};

export const actions: ActionTree<State, any> = {
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
};
