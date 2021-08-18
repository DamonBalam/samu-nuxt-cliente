<template>
  <panel-layout>
    <template v-slot:main>
      <back-btn color="secondary" text="Atrás" />
      <h1 class="mb-2 mb-md-0 mt-md-5 ml-md-5">Detalles de la Orden</h1>
      <v-row dense class="ml-md-5 mt-md-2">
        <v-col cols="7">
          <v-card width="100%">
            <v-card-title> Mes / Día / Año </v-card-title>
            <v-divider class="black"></v-divider>
            <v-card-text
              class="d-flex justify-space-between align-center mb-0 pb-1"
            >
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
            </v-card-text>
          </v-card>

          <v-card width="100%" class="mt-md-2">
            <div v-for="n in 3" :key="n">
              <v-container
                class="d-flex flex-column flex-md-row align-md-center"
              >
                <div class="mr-auto d-flex align-center mb-2">
                  <div class="mr-4">
                    <v-avatar size="80" tile>
                      <img src="~assets/img/Foto_Producto.jpg" alt="John" />
                    </v-avatar>
                  </div>
                  <div class="my-0">
                    <p class="my-0 font-weight-bold">Nombre del Producto</p>
                    <p class="my-0 mb-1">Precio</p>
                    <p class="my-0 mb-1">Cantidad</p>
                    <p class="my-0 mb-1">Variable</p>
                  </div>
                </div>
              </v-container>
              <v-divider class="my-1 mb-0 py-0"></v-divider>
            </div>
            <v-row dense class="mt-2">
              <v-col cols="4" offset="8">
                <p class="my-0 mr-5 text-right">Precio total artículos: 0.00</p>
                <p class="my-0 mr-5 text-right">Envío: 0.00</p>
                <p class="font-weight-bold mr-5 text-right">Total: 0.00</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card width="100%" class="mb-2">
            <v-row dense class="pa-3">
              <v-col cols="10">
                <p>Cliente</p>
                <p class="grey--text">Nombre del cliente</p>
                <p class="grey--text">Correo</p>
                <p class="grey--text">Número de teléfono</p>
              </v-col>
              <v-col cols="2">
                <v-icon size="60" color="primary">mdi-account</v-icon>
              </v-col>
            </v-row>
          </v-card>

          <v-card width="100%" class="mb-2">
            <v-row dense class="pa-3">
              <v-col cols="10">
                <p>Entrega</p>
                <p class="grey--text">Nombre del cliente</p>
                <p>Dirección</p>
                <p class="grey--text">Número de teléfono</p>
              </v-col>
              <v-col cols="2">
                <v-icon size="60" color="primary">mdi-van-utility</v-icon>
              </v-col>
            </v-row>
          </v-card>

          <v-card width="100%" class="mb-2">
            <v-row dense class="pa-3">
              <v-col cols="10">
                <p>Pago</p>
                <p class="grey--text">Nombre del tipo de pago elegido</p>
              </v-col>
              <v-col cols="2">
                <v-icon size="60" color="primary">mdi-credit-card</v-icon>
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
import BackBtn from "../../../components/UI/BackBtnComponent";

export default {
  name: "orden-detalle",
  components: { BackBtn, PanelLayout },
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


<style lang="scss" scoped>
</style>
