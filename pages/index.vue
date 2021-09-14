<template>
  <store-layout>
    <template v-slot:main>
      <!-- HERO -->
      <v-card
        color="white"
        class="mx-10"
        tile
        min-height="150"
        elevation="3"
      >
        <v-card-text class="px-16 py-5 d-flex align-center">
          <v-avatar
            style="border: 2px solid black !important"
            size="100"
            class="pa-2 white"
          >
            <!-- <span class="black--text text-h5">Logo</span> -->
            <img
              src="~/assets/brand/isologo.png"
              alt="Logo store"
            />
          </v-avatar>
          <div class="d-flex flex-column ml-5">
            <span
              class="font-weight-bold black--text"
              style="font-size: 28px"
            >{{ store.name }}</span
            >
            <span class="">{{ store.keyName }}</span>
          </div>
        </v-card-text>
        <v-card-text class="pa-0 ma-0">
          <v-row>
            <v-col
              cols="10"
              class="d-flex justify-space-around align-center px-5"
            >
              <nuxt-link
                v-for="link in store.menu"
                :key="link.label"
                to="/"
                class="d-block px-5 font-weight-bold black--text active-link text-h6"
              >{{ link.label }}
              </nuxt-link
              >
            </v-col>
            <v-col cols="2">
              <v-text-field
                label="Buscar producto"
                dense
                :hide-details="true"
                outlined
                filled
                class="mr-4"
              >
                <template v-slot:append>
                  <v-icon color="primary">mdi-magnify</v-icon>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card
        color="#EAEDF2"
        height="80vh"
        class="mx-10 mt-3"
        elevation="0"
        tile
      >
        <v-row>
          <v-col
            cols="2"
            offset="10"
            class="d-flex justify-center"
          >
            <v-btn
              small
              rounded
              class="texto-capitalizado font-weight-bold"
            >Ordenar por
            </v-btn>
          </v-col>

          <v-col cols="6">
            <v-card class="mx-5">
              <v-card-text class="d-flex ">
                <div class="mx-2">
                  <v-avatar
                    tile
                    color="grey"
                    size="200"
                    class="rounded"
                  ></v-avatar>
                </div>
                <div class="mx-2">
                  <h3 class="black--text mb-2">Nombre del Producto</h3>
                  <p class="my-0 py-1">Descripción del producto</p>
                  <p class="my-0 py-1">Descripción del producto</p>
                  <p class="my-0 py-1">Descripción del producto</p>

                  <div class="d-flex justify-space-between">
                    <p class="primary--text">Precio</p>
                    <v-btn color="primary" icon>
                      <v-icon>
                          mdi-magnify
                      </v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-card>
    </template>
  </store-layout>
</template>

<script>
import storeLayout from "../layouts/storeLayout.vue"

export default {
  name: "Index",
  components: {storeLayout},
  data() {
    return {
      store: {
        name: "Samu Mascotas",
        keyName: "@appsamu",
        urlImage: "",
        menu: [
          {label: "Inicio", link: "/inicio"},
          {label: "Juguetes", link: "/inicio"},
          {label: "Alimento", link: "/inicio"},
          {label: "Ropa", link: "/inicio"},
        ],
      },
    }
  },
}
</script>

<style scoped>
.active-link:hover {
  color: #06b0d7 !important;
  border-bottom: 3px solid #06b0d7;
}
</style>
