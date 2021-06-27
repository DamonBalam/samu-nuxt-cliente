<template>
  <panel-layout>
    <template v-slot:main>
      <v-container>

        <h1 class="texto-cairo-bold mb-2">Productos</h1>

        <v-row>
          <v-col cols="12">
            <v-btn
              color="primary"
              elevation="0"
              small
            >
              <v-icon
                left
                small
              >mdi-plus
              </v-icon>
              Añadir Nuevo Producto
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="search"
              :items="items"
              :loading="isLoading"
              :search-input.sync="search"
              hide-no-data
              hide-selected
              filled
              rounded
              item-text="Description"
              item-value="API"
              label="Buscar producto por nombre"
              prepend-icon="mdi-magnify"
              return-object
            ></v-autocomplete>
          </v-col>

          <!--    productos      -->

          <v-card width="100%">
            <v-col
              cols="12"
              v-for="n in 10"
              :key="n"
            >
              <v-container
                class="d-flex flex-column  flex-md-row"
              >
                <div class="mr-auto d-flex mb-2">
                  <div class="mr-4">
                    <v-avatar
                      size="120"
                      tile
                    >
                      <img
                        src="~assets/img/Foto_Producto.jpg"
                        alt="John"
                      >
                    </v-avatar>
                  </div>
                  <div class=" my-0">
                    <p class="my-0">Nombre del Producto</p>
                    <p class="my-0 mb-1">Precio</p>
                    <v-switch
                      v-model="estado"
                      flat
                      :label="estado_label"
                      dense
                      class="my-0"
                    ></v-switch>
                  </div>
                </div>


                <div class="d-flex align-center">
                  <v-btn
                    small
                    outlined
                    block
                  >editar producto
                  </v-btn>
                </div>
              </v-container>
              <v-divider class="my-1 mb-0 py-0"></v-divider>
            </v-col>
          </v-card>
        </v-row>
      </v-container>
    </template>
  </panel-layout>
</template>

<!--<v-row justify="space-between">-->
<!--<v-col cols="12" md="4">-->
<!--  <v-img src="https://www.wrike.com/blog/content/uploads/2015/12/errores-fatales-en-el-lanzamiento-de-un-producto.jpg" aspect-ratio="2">-->
<!--  </v-img>-->
<!--</v-col>-->

<!--<v-col>-->
<!--  <p>Nombre del Producto</p>-->
<!--  <p>Precio</p>-->

<!--</v-col>-->

<!--<v-col cols="12" md="2">-->
<!--  <v-btn small color="secondary">editar producto</v-btn>-->
<!--</v-col>-->
<!--</v-row>-->

<script>
import PanelLayout from "../../../layouts/panelLayout"

export default {
  name: "ProductosScreen",
  components: {PanelLayout},
  data() {
    return {
      estado: true,
      search: '',
      isLoading: false,
      items: []
    }
  },
  computed: {
    estado_label() {
      if (this.estado) {
        return 'Habilitado'
      } else {
        return 'Deshabilitado'
      }
    }
  },
}
</script>

<style scoped>
.producto__container {
  display: flex;
}
</style>
