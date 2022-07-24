<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link__to__cart">Back to Catalog</div>
    </router-link>
    <h1 style="text-align: center">Корзина</h1>
    <p style="text-align: center" v-if="!cart_data.length">
      Вы пока что ничего не приобрели
    </p>
    <vCartItem
      v-for="(item, i) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(i)"
      @decrement="decrement(i)"
      @increment="increment(i)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCount }} $</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";
export default {
  computed: {
    cartTotalCount() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    decrement(i) {
      this.DECREMENT_CART_ITEM(i);
    },
    increment(i) {
      this.INCREMENT_CART_ITEM(i);
    },
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(i) {
      this.DELETE_FROM_CART(i);
    },
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    vCartItem,
  },
};
</script>
<style>
.v-cart {
  margin-bottom: 100px;
}
.v-cart__total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  background: #26ae68;
  color: #fff;
  font-size: 20px;
}
.total__name {
  margin-right: 16px;
}
</style>
