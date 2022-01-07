<template>
  <panel-layout>
    <template v-slot:main>
      <h1 class="mb-2 mb-md-0 mt-md-5 ml-md-5">Productos</h1>
      <v-row dense class="ml-md-5 mt-md-2">
        <v-col cols="12" md="10">
          <v-btn
            color="primary"
            elevation="1"
            class="btn-border-black texto-capitalizado font-weight-bold"
            small
            link
            to="/control-panel/productos/nuevo-producto"
          >
            <v-icon left small>mdi-plus </v-icon>
            Añadir Nuevo Producto
          </v-btn>
        </v-col>

        <v-col cols="12" md="10" class="mt-2 mb-0 pb-0">
          <v-text-field
            v-model="search"
            dense
            outlined
            label="Buscar producto por nombre"
            prepend-inner-icon="mdi-magnify"
          >
          </v-text-field>
        </v-col>

        <!--    productos      -->
        <v-col cols="12" md="10" class="mt-0 pt-0">
          <v-card width="100%">
            <v-row no-gutters dense  >

            <v-col cols="12" v-for="n in 10" :key="n">
              <v-container class="d-flex flex-column flex-md-row">
                <div class="mr-auto d-flex mb-2">
                  <div class="mr-4">
                    <v-avatar size="120" tile>
                      <img src="~assets/img/Foto_Producto.jpg" alt="John" />
                    </v-avatar>
                  </div>
                  <div class="my-0">
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
                  <v-btn small outlined class="btn-border-black texto-capitalizado" >Editar producto </v-btn>
                </div>
              </v-container>
              <v-divider class="my-1 mb-0 py-0"></v-divider>
            </v-col>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
    </template>
  </panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout";

export default {
  name: "ProductosScreen",
  components: { PanelLayout },
  data() {
    return {
      estado: true,
      search: "",
      isLoading: false,
      items: [],
    };
  },
  computed: {
    estado_label() {
      if (this.estado) {
        return "Habilitado";
      } else {
        return "Deshabilitado";
      }
    },
  },
};
</script>

<style scoped>
.producto__container {
  display: flex;
}
.v-application .primary {
  /*background-color: #1D6B41 !important;*/
  border-color: black !important;
}
</style>
