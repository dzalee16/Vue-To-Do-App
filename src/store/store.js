import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    value: null,
    todos: [],
    errorMsg: null,
    completedTodos: [],
  },
  getters,
  mutations,
  actions,
});

export default store;
