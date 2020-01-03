import Vue from 'vue';
import Vuex from 'vuex';
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    products: [],
    loading: false,

    filter: {
      name: null,
      price: null
    }
  },

  mutations: {

    SET_PRODUCTS(state, payload) {
      state.products = payload
    },

    SET_FILTER_NAME(state, payload) {
      state.filter.name = payload
    },

    SET_FILTER_PRICE(state, payload) {
      state.filter.price = payload
    },

  },

  actions: {

    /**
     * Fetch products data
     *
     * @param commit
     * @param payload
     */
    getProducts({ commit, state }) {

      this.state.loading = true;

      Axios.get(`/filters`, {
        params: {
          include: 'attributes',
          'filter[name]': state.filter.name || null,
          'filter[price]': state.filter.price || null,
        }
      })
          .then(response => {
            commit('SET_PRODUCTS', response.data);
            this.state.loading = false;
          })
          .catch(() => {
            this.state.loading = false;
          })
    },

    /**
     * Get name search text and update state
     *
     * @param commit
     * @param payload
     */
    updateNameFilter({ commit }, payload) {
      commit('SET_FILTER_NAME', payload);
    },

    /**
     * Get price sort text and update state
     *
     * @param commit
     * @param payload
     */
    updatePriceFilter({ commit }, payload) {
      commit('SET_FILTER_PRICE', payload);
    }

  },

  getters: {
  }

})
