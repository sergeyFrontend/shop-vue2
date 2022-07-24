<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link__to__cart" style="font-weight: bold">
        <img src="../assets/images/cart.svg" alt="" /> {{ CART.length }}
      </div>
    </router-link>

    <h1 style="text-align: center">Catalog</h1>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    vCatalogItem,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data array");
      }
    });
  },
};
</script>

<style>
.v-catalog__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 110vh;
}
.v-catalog__link__to__cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: 1px solid grey;
}
</style>
