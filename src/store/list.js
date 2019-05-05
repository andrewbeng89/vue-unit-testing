import axios from "axios";

// A simple vuex store: list.js
const state = { list: [], status: "" };

const mutations = {
  addItem: (state, item) => {
    state.list = [...state.list, item];
  },
  setItems: (state, items) => {
    state.items = items;
  },
  addItems: (state, items) => {
    state.items = [...state.items, ...items];
  },
  setStatus: (state, status) => {
    state.status = status;
  }
};

const actions = {
  fetchItems: async ({ commit }, page) => {
    try {
      const url =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://nodejs-koa.andrewbeng89.now.sh";
      commit("setStatus", "loading");
      const { data } = await axios.get(`${url}/items?page=${page}`);
      const action = page ? "setItems" : "addItems";
      commit(action, data);
      commit("setStatus", "success");
    } catch (error) {
      commit("setStatus", error.message);
    }
  }
};

const getters = {
  getItem: state => index => state.list[index]
};

export default {
  state,
  mutations,
  getters,
  actions
};
