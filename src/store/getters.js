import * as types from "./types";

export default {
  [types.VALUE](state) {
    return state.value;
  },
  [types.TODOS](state) {
    return state.todos;
  },
  [types.ERROR_MESSAGE](state) {
    return state.errorMsg;
  },
};
