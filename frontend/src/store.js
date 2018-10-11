import Vue from "vue";
import Vuex from "vuex";
import knivesService from "./service/knivesService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    knives: [],
    selectedKnife: null,
    knivesFilter: null
  },
  mutations: {
    setKnivesFilter(state, { filter }) {
      state.knivesFilter = filter;
    },
    setSelectedKnife(state, { knife }) {
      state.selectedKnife = knife;
    },
    setknives(state, { knives }) {
      state.knives = knives;
    }
  },
  getters: {
    knivesForeDisplay(state) {
      return state.knives;
    },
    currknifeForDisplay(state) {
      return state.selectedKnife;
    }
  },
  actions: {
    loadKnives(store) {
      return knivesService.getKnives(store.state.knivesFilter).then(knives => {
        store.commit({ type: "setknives", knives });
      });
    },
    getKnifeById(store, { knifeId }) {
      return knivesService.getKnifeById(knifeId).then(knife => {
        store.commit({
          type: "setSelectedKnife",
          knife
        });
      });
    }
  }
});
