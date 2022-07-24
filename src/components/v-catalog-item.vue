<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../assets/images/' + product_data.image)"
      alt="img"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">price {{ product_data.price }} $</p>
    <button @click="addToCart" class="btn v-catalog-item__btn">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style scoped>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.v-catalog-item__image {
  width: 100px;
}

.btn {
  padding: 8px 16px;
  background: #26ae68;
  color: #ffffff;
  border: 0;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.btn:hover {
  background: #31c375;
}
</style>
