import Vue from "vue";
import Vuex from "vuex";
import { todoService } from "@/services/todo.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    allTodos: (state) => {
      return state.todos;
    },
    firstTodo: (state) => {
      return state.todos[0] || {id: "new"};
    }
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    FETCH_TODOS: ({ commit }) => {
      return todoService.list().then(res => {
        commit("updateTodos", res.data);
        return res;
      });
    }
  },
});
