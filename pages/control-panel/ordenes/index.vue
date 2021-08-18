<template>
  <panel-layout>
    <template v-slot:main>
      <h1 class="mb-2 mb-md-0 mt-md-5 ml-md-5">Órdenes</h1>
      <v-row dense class="ml-md-5 mt-md-2">
        <v-col cols="12" md="10" class="mt-2 mb-0 pb-0">
          <v-text-field
            v-model="search"
            outlined
            dense
            label="Buscar producto por nombre"
            prepend-inner-icon="mdi-magnify"
            class="pa-0"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="10" class="mb-0 pb-0">
          <v-card width="100%">
            <v-row no-gutters>
              <v-col cols="12" class="mt-3 ml-3">
                <span class="font-weight-bold">Mes / Día / Año</span>
              </v-col>
              <v-col cols="12" v-for="n in 10" :key="n">
                <v-container
                  class="d-flex flex-column flex-md-row align-md-center"
                >
                  <div class="mr-auto d-flex mb-2">
                    <div class="mr-4">
                      <v-avatar size="120" tile>
                        <img src="~assets/img/Foto_Producto.jpg" alt="John" />
                      </v-avatar>
                    </div>
                    <div class="my-0">
                      <p class="my-0">Nombre del Producto</p>
                      <p class="my-0 mb-1">Precio</p>
                      <p class="my-0 mb-1">Cantidad</p>
                      <div class="d-flex align-center justify-space-between">
                        <p class="my-0 mr-2">
                          <v-icon color="primary" small>
                            mdi-van-utility
                          </v-icon>
                          Tipo de envío
                        </p>
                        <p class="my-0">
                          <v-icon color="primary" small>
                            mdi-credit-card
                          </v-icon>
                          Tipo de pago
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex align-center justify-space-between mr-2">
                    <v-select
                      outlined
                      dense
                      :items="estadosPago"
                      item-value="id"
                      item-text="nombre"
                      placeholder="Estado de Pago"
                      class="mr-2"
                      return-object
                    >
                    </v-select>
                    <v-select
                      outlined
                      dense
                      :items="estadosEnvio"
                      item-value="id"
                      item-text="nombre"
                      placeholder="Estado de Envio"
                      return-object
                    >
                    </v-select>
                  </div>
                  <div class="d-flex align-center justify-space-between">
                    <v-btn text icon large link to="/control-panel/ordenes/orden-detalle">
                      <v-icon large>mdi-chevron-right</v-icon>
                    </v-btn>
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
  name: "OrdenesScreen",
  components: { PanelLayout },
  data() {
    return {
      estadosPago: [
        { id: 1, nombre: "Pagado" },
        { id: 2, nombre: "Cancelado" },
        { id: 3, nombre: "Reembolsado" },
        { id: 4, nombre: "En espera de pago" },
      ],
      estadosEnvio: [
        { id: 1, nombre: "En proceso" },
        { id: 2, nombre: "Cancelado" },
        { id: 3, nombre: "Enviado" },
        { id: 4, nombre: "Entregado" },
        { id: 5, nombre: "Esperando procesamiento" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
