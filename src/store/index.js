import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },

  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },

  mutations: {
    INCREMENT: (state, i) => {
      state.cart[i].quantity++;
    },
    DECREMENT: (state, i) => {
      if (state.cart[i].quantity > 1) {
        state.cart[i].quantity--;
      }
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART(state, product) {
      if (state.cart.length) {
        let isProductsExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductsExists = true;
            item.quantity++;
          }
        });
        if (!isProductsExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, i) => {
      state.cart.splice(i, 1);
    },
  },

  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, i) {
      commit("REMOVE_FROM_CART", i);
    },
    INCREMENT_CART_ITEM({ commit }, i) {
      commit("INCREMENT", i);
    },
    DECREMENT_CART_ITEM({ commit }, i) {
      commit("DECREMENT", i);
    },
  },

  modules: {},
});
