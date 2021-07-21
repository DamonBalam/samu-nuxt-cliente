<template>
  <store-layout>
    <template v-slot:main>
      <!-- HERO -->
      <v-card
        color="primary"
        flat
        class="mx-10 pa-2 d-flex align-center"
        tile
        min-height="150"
      >
        <v-avatar
          style="border-color: white !important"
          size="130"
          class="pa-2 grey"
        >
          <span class="black--text text-h5">Logo</span>
        </v-avatar>
        <div class="d-flex flex-column ml-5">
          <span class="font-weight-bold white--text" style="font-size: 32px"
            >Nombre de la Tienda</span
          >
          <span class="white--text">Categoria de la tienda</span>
        </div>
      </v-card>
      <!-- navbar -->
      <v-card elevation="1" class="mx-10 py-2">
        <div class="d-flex justify-space-around align-center px-5">
          <nuxt-link to="/" class="d-block">Inicio</nuxt-link>
          <nuxt-link to="/" class="d-block">Producto por categoria</nuxt-link>
          <nuxt-link to="/" class="d-block">Producto por categoria</nuxt-link>
          <nuxt-link to="/" class="d-block">Producto por categoria</nuxt-link>
        </div>
      </v-card>
    </template>
  </store-layout>
</template>

<script>
import storeLayout from "../layouts/storeLayout.vue";
export default {
  components: { storeLayout },
};
</script>

<style scoped>
</style>
