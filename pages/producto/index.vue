<template>
  <storeLayout>
    <template v-slot:main>
      <v-card height="60px" tile flat color="primary">
        <v-card-title class="d-flex justify-center">
          <span class="warning--text mr-1">VER LA TIENDA</span>
          <span class="white--text ml-1">NOMBRE DE LA TIENDA</span>
        </v-card-title>
      </v-card>
      <v-row no-gutters justify="center">
        <v-col cols="12" md="4" class="mt-10 d-flex flex-column-reverse flex-md-row justify-md-center justify-md-end align-md-end mr-4">
          <div class="d-flex flex-md-column justify-center">
            <v-avatar class="mx-1 mx-md-auto my-md-1" size="100" tile color="grey"></v-avatar>
            <v-avatar class="mx-1 mx-md-auto my-md-1" size="100" tile color="grey"></v-avatar>
            <v-avatar class="mx-1 mx-md-auto my-md-1" size="100" tile color="grey"></v-avatar>
            <v-avatar class="mx-1 mx-md-auto my-md-1" size="100" tile color="grey"></v-avatar>
          </div>
          <div class="d-flex ml-md-5 justify-center">
            <v-avatar class="my-1 mx-1" tile color="grey" size="426"></v-avatar>
          </div>

        </v-col>
        <v-col cols="12" md="4" class="mt-10 justify-start ml-md-4 px-10">
          <h3>Nombre del Producto</h3>
          <h4>Precio</h4>
          <p>
            Descripción Descripción Descripción Descripción Descripción Descripción Descripción Descripción Descripción
            Descripción Descripción
            Descripción
          </p>

          <h4>Variable</h4>
          <v-btn class="texto-capitalizado mt-2" outlined>Variable</v-btn>

          <div class="mt-16 mb-16">
            <v-btn class="texto-capitalizado" style="border: 1px solid #c1c1c1!important; " color="warning"
                   depressed>Comprar
            </v-btn>
            <v-btn class="texto-capitalizado" style="border: 1px solid #c1c1c1!important; " outlined>Añadir al
              carrito
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </template>
  </storeLayout>
</template>

<script>
import storeLayout from "../../layouts/storeLayout.vue"

export default {
  name: "Producto",
  components: {
    storeLayout
  }
}
</script>

<style scoped>

</style>
