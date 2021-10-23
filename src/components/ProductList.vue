
<template>
  <div>
    <h1>ProductList</h1>

    <p v-if="products.length == 0">Urun Listelenmedi</p>

    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>adet</th>
          <th>stok</th>
          <th>aciklama</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td v-if="updateId === product.id">
            <input v-model="product.id" type="text" class="form-control" />
          </td>
          <td v-else>
            {{ product.id }}
          </td>
          <td v-if="updateId === product.id">
            <input v-model="product.name" type="text" class="form-control" />
          </td>
          <td v-else>
            {{ product.name }}
          </td>
          <td v-if="updateId === product.id">
            <input v-model="product.adet" type="text" class="form-control" />
          </td>
          <td v-else>
            {{ product.adet }}
          </td>
          <td v-if="updateId === product.id">
            <input v-model="product.stok" type="text" class="form-control" />
          </td>
          <td v-else>
            {{ product.stok }}
          </td>
          <td v-if="updateId === product.id">
            <input
              v-model="product.aciklama"
              type="text"
              class="form-control"
            />
          </td>
          <td v-else>
            {{ product.aciklama }}
          </td>

          <td v-if="updateId === product.id">
            <button
              class="btn btn-sm btn-success"
              @click="handleSave(product)"
            >
              save
            </button>
            <button class="btn btn-sm btn-dark" @click="updateId=null">
              iptal
            </button>
          </td>
          <td v-else>
            <button
              class="btn btn-sm btn-danger"
              @click="handleDelete(product)"
            >
              Delete
            </button>
            <button
              class="btn btn-sm btn-primary"
              @click="handleUpdate(product)"
            >
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "ProductList",
  props: {
    products: Array,
  },

  data() {
    return { updateId: null };
  },

  methods: {
    handleDelete(product) {
      this.$emit("delete:product", product);
    },
    handleUpdate(product) {
      this.updateId = product.id;
    },
    handleSave(product){
        this.$emit("update:product",product)
        this.updateId=null
    }
  },
};
</script>


<style scoped>
</style>