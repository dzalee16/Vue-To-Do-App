import * as types from "./types";

export default {
  [types.UPDATE_VALUE]({ commit }, payload) {
    commit(types.MUTATE_VALUE, payload);
  },
  [types.ADD_TODO]({ commit }, payload) {
    commit(types.MUTATE_ADD_TODO, payload);
  },
  [types.DELETE_TODO]({ commit }, id) {
    commit(types.MUTATE_DELETE_TODO, id);
  },
  [types.EDIT_TODO](context, id) {
    context.commit(types.MUTATE_EDIT_TODO, id);
  },
  [types.COMPLETE_TODO]({ commit }, id) {
    commit(types.MUTATE_COMPLETE_TODO, id);
  },
};
