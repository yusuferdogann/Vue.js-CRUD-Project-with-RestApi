<template>
  <div>
    <h1>ProductAdd</h1>
    <hr />

    <form @submit.prevent="handleAdd">
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <label for="">id</label>
            <input v-model="product.id" type="text" class="form-control" />
            <label for="">name</label>
            <input v-model="product.name" type="text" class="form-control" />
            <label for="">adet</label>
            <input v-model="product.adet" type="text" class="form-control" />
            <label for="">stok</label>
            <input v-model="product.stok" type="text" class="form-control" />
            <label for="">aciklama</label>
            <input
              v-model="product.aciklama"
              type="text"
              class="form-control"
            />
            <br />
          </div>
        </div>
      </div>
    </form>
    <button type="submit" class="btn btn-primary">
      tikla
    </button>
  </div>
</template>


<script>
export default {
  name: "ProductAdd",
  data() {
    return {
      product: {
        id: "",
        name: "",
        adet: "",
        stok: "",
        aciklama: "",
      },
    };
  },

  methods: {
    handleAdd() {
      this.$emit("add:product", this.product);
      this.product.name = "";
      this.product.adet = "";
      this.product.stok = "";
      this.product.aciklama = "";
    },
   
  },
};
</script>

<style scoped>
</style>