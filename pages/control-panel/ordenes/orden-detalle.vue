<template>
  <panel-layout>
    <template v-slot:main>
      <back-btn color="secondary" text="Atrás" />
      <h1 class="mb-2 mb-md-0 mt-md-5 ml-md-5">Detalles de la Orden</h1>
      <v-row dense class="ml-md-5 mt-md-2">
        <v-col cols="7">


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
                <v-icon  size="60" color="primary">mdi-account</v-icon>
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
                <v-icon  size="60" color="primary">mdi-van-utility</v-icon>
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
                <v-icon  size="60" color="primary">mdi-credit-card</v-icon>
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
};
</script>


<style lang="scss" scoped>
</style>
