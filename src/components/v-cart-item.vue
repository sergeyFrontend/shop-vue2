<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
    />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }} $</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty</p>
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span>

        {{ cart_item_data.quantity }}

        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style scoped>
.v-cart-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: 16px;
  margin-bottom: 16px;
}
.v-cart-item__image {
  max-width: 50px;
}
.quantity__btn {
  cursor: pointer;
}
</style>
