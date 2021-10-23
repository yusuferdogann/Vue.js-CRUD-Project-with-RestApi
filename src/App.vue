<template>
  <div class="container">
    
    <ProductAdd @add:product="addprocess" />
    <ProductList
      @update:product="kayitislemi"
      @delete:product="silmeislemi"
      :products="products"
    />
  </div>
</template>


<script>
import ProductList from "./components/ProductList.vue";
import ProductAdd from "./components/ProductAdd.vue";

export default {
  name: "app",
  components: {
    ProductList,
    ProductAdd,
  },
  data() {
    return {
      products: [],
      email: "",
         
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      const result = await fetch("http://localhost:3000/products");
      const data = await result.json();
      this.products = data;
    },
    async silmeislemi(product) {
      await fetch("http://localhost:3000/products/" + product.id, {
        method: "DELETE",
      });
      this.products = this.products.filter(
        (productToFilter) => productToFilter.id !== product.id
      );
    },
    async kayitislemi(product) {
      const result = await fetch(
        "http://localhost:3000/products/" + product.id,
        {
          method: "PUT",
          body: JSON.stringify(product),
          headers: { "Content-Type": "application/json" },
        }
      );
      const updatedata = await result.json();
      this.products = this.products.map((product) =>
        product.id === updatedata.id ? updatedata : product
      );
    },

    async addprocess(product) {
      const result = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
      });
      const newProduct = await result.json();
      this.products = [...this.products, newProduct];
    },
    resetinput() {
      this.email = "";
    },

  },
};
</script>



<style scoped>
</style>